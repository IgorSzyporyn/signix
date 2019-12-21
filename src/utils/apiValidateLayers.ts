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
  const modelErrors: ApiErrorInterface[] = []
  let errors: ApiLayerErrorStoreErrorsInterface = { ...sourceErrors }

  // Check for name in example data
  if (model.api && model.value && !queryData[model.value]) {
    modelErrors.push({
      id: model.id!,
      text: `API Key "${model.value}" does not exist in results from data API`,
      errorLevel: 'critical',
      name: model.name || ''
    })
  }

  // Check if all enumerations matches up
  if (model.enumeration.length > 0) {
    // Go through check for this API key in matching apiModel
    if (model.value && queryModel[model.value]) {
      const apiModelKeys = queryModel[model.value]

      // Make sure apiModel has a key for our enumeration
      model.enumeration.forEach(enumeration => {
        if (!apiModelKeys.includes(enumeration.key)) {
          modelErrors.push({
            id: model.id!,
            text: `The enumeration key "${enumeration.key}" is missing in API model`,
            errorLevel: 'fixable',
            enumKey: enumeration.key,
            errorType: 'unsupportedEnumKey',
            name: model.name || ''
          })
        }
      })

      // Check if apiModel has a key we do not have in enumeration
      apiModelKeys.forEach(modelKey => {
        // Se if modelKey is use in enumeration
        const modelKeyUsedInEnumeration = model.enumeration.find(enumeration => {
          return enumeration.key === modelKey
        })

        if (!modelKeyUsedInEnumeration) {
          modelErrors.push({
            id: model.id!,
            text: `Missing an enumeration for "${modelKey}" in "${model.value}""`,
            errorLevel: 'fixable',
            enumKey: modelKey,
            errorType: 'missingEnumKey',
            name: model.name || ''
          })
        }
      })
    } else {
      modelErrors.push({
        id: model.id!,
        text: `Unmatched key (${model.value}) in the API model`,
        errorLevel: 'critical',
        name: model.name || ''
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
