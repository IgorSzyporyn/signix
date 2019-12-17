import ModelStore from '../stores/ModelStore'
import ApiQueryStore from '../stores/ApiQueryStore'
import ApiEnumerationKeyTypes from '../types/ApiEnumerationKeyTypes'
import ModelInterface from '../types/ModelInterface'
import ModelStoreInterface from '../types/ModelStoreInterface'
import ApiQueryStoreDataInterface from '../types/ApiQueryStoreDataInterface'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import ApiQueryStoreModelInterface from '../types/ApiQueryStoreModelInterface'

const appendErrorToResult = (
  result: ValidateLayerModelResultItem[] | true,
  error: ValidateLayerModelResultItem | ValidateLayerModelResultItem[]
) => {
  let processedError: ValidateLayerModelResultItem[] = []

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
  let result: ValidateLayerModelResult = true

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
          const error: ValidateLayerModelResultItem = {
            id: model.id!,
            text: `The enumeration key "${enumeration.key}" is missing in API model`,
            errorLevel: 'fixable',
            enumKey: enumeration.key,
            type: 'unsupportedEnumKey',
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
          const error: ValidateLayerModelResultItem = {
            id: model.id!,
            text: `Missing an enumeration for "${modelKey}" in "${model.value}""`,
            errorLevel: 'fixable',
            enumKey: modelKey,
            type: 'missingEnumKey',
            name: model.name || ''
          }

          result = appendErrorToResult(result, error)
        }
      })
    } else {
      const error: ValidateLayerModelResultItem = {
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

type ValidateLayerModelResultErrorLevel = 'fixable' | 'critical'

type ValidateLayerModelErrorType = 'missingEnumKey' | 'unsupportedEnumKey'

export type ValidateLayerModelResultItem = {
  id: string
  enumKey?: ApiEnumerationKeyTypes
  type?: ValidateLayerModelErrorType
  text: string
  errorLevel: ValidateLayerModelResultErrorLevel
  name: string
}

export type ValidateLayerModelResult = ValidateLayerModelResultItem[] | true

type Callback = (valid: ValidateLayerModelResult) => void

const validateLayerModelIntegrity = (callback: Callback) => {
  const { model: rootModel }: ModelStoreInterface = ModelStore.get()
  const {
    data: apiData,
    model: apiModel
  }: ApiQueryStoreInterface = ApiQueryStore.get()
  const result = validateLayerModel(rootModel, apiData, apiModel)

  callback(result)
}

export default validateLayerModelIntegrity
