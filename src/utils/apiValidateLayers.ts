import { isEmpty } from 'lodash'
import ApiQueryStore from '../stores/ApiQueryStore'
import ModelStore from '../stores/ModelStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import ApiLayerErrorStoreErrorsInterface from '../types/ApiLayerErrorStoreErrorsInterface'
import ApiQueryStoreDataInterface from '../types/ApiQueryStoreDataInterface'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import ApiQueryStoreModelInterface from '../types/ApiQueryStoreModelInterface'
import ModelInterface from '../types/ModelInterface'
import ModelStoreInterface from '../types/ModelStoreInterface'
import apiSyncValidateLayers from './apiSyncValidateLayers'

const validateModel = (
  model: ModelInterface,
  queryData: ApiQueryStoreDataInterface,
  queryModel: ApiQueryStoreModelInterface,
  sourceErrors: ApiLayerErrorStoreErrorsInterface
) => {
  const apiKey = model.value || ''
  const modelName = model.name || ''
  const modelErrors: ApiErrorInterface[] = []
  let errors: ApiLayerErrorStoreErrorsInterface = { ...sourceErrors }

  // Check for name in example data
  if (model.api && apiKey && !queryData[apiKey]) {
    modelErrors.push({
      id: model.id!,
      text: `Used API key "${apiKey}" is not found in API Data`,
      errorLevel: 'critical',
      name: modelName,
      errorType: 'apiKeyNotInData'
    })
  }

  // Check if all existing enumerations matches up
  if (model.enumeration.length > 0) {
    // Go through check for this API key in matching apiModel
    if (apiKey && queryModel[apiKey]) {
      const apiModelKeys = queryModel[apiKey]

      // Make sure apiModel has a key for our enumeration
      model.enumeration.forEach(enumeration => {
        if (!apiModelKeys.includes(enumeration.key)) {
          modelErrors.push({
            id: model.id!,
            text: `Enumeration key "${enumeration.key}" for "${apiKey}" is not found in API Model`,
            errorLevel: 'fixable',
            enumKey: enumeration.key,
            errorType: 'enumKeyNotInModel',
            name: modelName
          })
        }
      })

      // Check if apiModel has a key we do not have in enumeration
      apiModelKeys.forEach(modelKey => {
        // Se if modelKey is use in enumeration
        const modelKeyUsedInEnumeration = model.enumeration.find(
          enumeration => enumeration.key === modelKey
        )

        if (!modelKeyUsedInEnumeration) {
          modelErrors.push({
            id: model.id!,
            text: `API Model has an enumeration key "${modelKey}" not used`,
            errorLevel: 'fixable',
            enumKey: modelKey,
            errorType: 'missingEnumKeyFromModel',
            name: modelName
          })
        }
      })
    } else {
      modelErrors.push({
        id: model.id!,
        text: `API key "${apiKey}" uses enumerations not found in API Model`,
        errorLevel: 'fixable',
        errorType: 'apiKeyNotInModel',
        name: modelName
      })
    }
  } else {
    // API Model may have enumerations while model has none
    const queryModelEnums = queryModel[apiKey]

    if (queryModelEnums && queryModelEnums.length > 0) {
      queryModelEnums.forEach(queryModelEnum => {
        modelErrors.push({
          id: model.id!,
          text: `API Model has an enumeration key "${queryModelEnum}" not used`,
          errorLevel: 'fixable',
          enumKey: queryModelEnum,
          errorType: 'missingEnumKeyFromModel',
          name: modelName
        })
      })
    }
  }

  if (modelErrors.length > 0) {
    errors[model.id!] = modelErrors
  }

  if (model.items.length > 0) {
    model.items.forEach(item => {
      errors = validateModel(item as ModelInterface, queryData, queryModel, errors)
    })
  }

  return errors
}

const apiValidateLayers = (
  callback?: (valid: boolean, error: ApiLayerErrorStoreErrorsInterface) => void
) => {
  const { model: rootModel }: ModelStoreInterface = ModelStore.get()
  const queryStore: ApiQueryStoreInterface = ApiQueryStore.get()

  let valid = false
  const errors = validateModel(rootModel, queryStore.data, queryStore.model, {})

  if (isEmpty(errors)) {
    valid = true
  }

  apiSyncValidateLayers(valid, errors)
  callback && callback(valid, errors)
}

export default apiValidateLayers
