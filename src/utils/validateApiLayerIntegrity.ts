import resetApiLayerErrorStore from '../stores/apiLayerErrorStore/resetApiLayerErrorStore'
import setApiLayerErrorStore from '../stores/apiLayerErrorStore/setApiLayerErrorStore'
import ApiQueryStore from '../stores/ApiQueryStore'
import ModelStore from '../stores/ModelStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import ApiQueryStoreDataInterface from '../types/ApiQueryStoreDataInterface'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import ApiQueryStoreModelInterface from '../types/ApiQueryStoreModelInterface'
import GroupedLayerErrorsInterface from '../types/GroupedLayerErrorsInterface'
import ModelInterface from '../types/ModelInterface'
import ModelStoreInterface from '../types/ModelStoreInterface'
import groupLayerErrorsById from './groupLayerErrorsById'

const appendErrorToResult = (
  result: ApiErrorInterface[] | true,
  error: ApiErrorInterface | ApiErrorInterface[]
) => {
  let processedError: ApiErrorInterface[] = []

  if (!Array.isArray(error)) {
    processedError = [error]
  } else {
    processedError = error
  }

  if (result !== true) {
    result = [...result, ...processedError]
  } else {
    result = processedError
  }

  return result
}

const validateLayerModel = (
  model: ModelInterface,
  apiData: ApiQueryStoreDataInterface,
  apiModel: ApiQueryStoreModelInterface
) => {
  let result: ValidateApiLayerInterface = true

  // Check for name in example data
  if (model.api && model.value && !apiData[model.value]) {
    result = appendErrorToResult(result, {
      id: model.id!,
      text: `API Key "${model.value}" does not exist in results from data API`,
      errorLevel: 'critical',
      name: model.name || ''
    })
  }

  // Check if all enumerations matches up
  if (model.enumeration.length > 0) {
    // Go through check for this API key in matching apiModel
    if (model.value && apiModel[model.value]) {
      const apiModelKeys = apiModel[model.value]

      // Make sure apiModel has a key for our enumeration
      model.enumeration.forEach(enumeration => {
        if (!apiModelKeys.includes(enumeration.key)) {
          const error: ApiErrorInterface = {
            id: model.id!,
            text: `The enumeration key "${enumeration.key}" is missing in API model`,
            errorLevel: 'fixable',
            enumKey: enumeration.key,
            errorType: 'unsupportedEnumKey',
            name: model.name || ''
          }

          result = appendErrorToResult(result, error)
        }
      })

      // Check if apiModel has a key we do not have in enumeration
      apiModelKeys.forEach(modelKey => {
        // Se if modelKey is use in enumeration
        const modelKeyUsedInEnumeration = model.enumeration.find(
          enumeration => {
            return enumeration.key === modelKey
          }
        )

        if (!modelKeyUsedInEnumeration) {
          const error: ApiErrorInterface = {
            id: model.id!,
            text: `Missing an enumeration for "${modelKey}" in "${model.value}""`,
            errorLevel: 'fixable',
            enumKey: modelKey,
            errorType: 'missingEnumKey',
            name: model.name || ''
          }

          result = appendErrorToResult(result, error)
        }
      })
    } else {
      const error: ApiErrorInterface = {
        id: model.id!,
        text: `Unmatched key (${model.value}) in the API model`,
        errorLevel: 'critical',
        name: model.name || ''
      }

      result = appendErrorToResult(result, error)
    }
  }

  if (model.items.length > 0) {
    model.items.forEach(item => {
      const validateResult = validateLayerModel(
        item as ModelInterface,
        apiData,
        apiModel
      )

      if (validateResult !== true && validateResult.length > 0) {
        result = appendErrorToResult(result, validateResult)
      }
    })
  }

  return result
}

type ValidateApiLayerInterface = ApiErrorInterface[] | true

type Callback = (result: GroupedLayerErrorsInterface | true) => void

const validateApiLayerIntegrity = (callback?: Callback) => {
  const { model: rootModel }: ModelStoreInterface = ModelStore.get()
  const {
    data: apiData,
    model: apiModel
  }: ApiQueryStoreInterface = ApiQueryStore.get()

  debugger

  let result = validateLayerModel(rootModel, apiData, apiModel)
  let groupedResult: GroupedLayerErrorsInterface | true = true

  if (result === true) {
    resetApiLayerErrorStore()
  } else {
    groupedResult = groupLayerErrorsById(result)
    setApiLayerErrorStore(groupedResult)
  }

  callback && callback(groupedResult)
}

export default validateApiLayerIntegrity
