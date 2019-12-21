import { isEmpty } from 'lodash'
import ApiLayerErrorStore from '../stores/ApiLayerErrorStore'
import { searchModelById } from '../stores/model/getModelById'
import updateItemInModelStore from '../stores/model/updateItemInModelStore'
import ApiEnumerationInterface from '../types/ApiEnumerationInterface'
import ApiEnumerationKeyTypes from '../types/ApiEnumerationKeyTypes'
import ApiLayerErrorStoreErrorsInterface from '../types/ApiLayerErrorStoreErrorsInterface'
import ApiLayerErrorStoreInterface from '../types/ApiLayerErrorStoreInterface'
import ModelCoreTypes from '../types/ModelCoreTypes'
import apiSyncFixLayers from './apiSyncFixLayers'

const fixMissingEnumKey = (
  enumeration: ApiEnumerationInterface[],
  key: ApiEnumerationKeyTypes,
  type: ModelCoreTypes
) => {
  enumeration.push({
    key,
    type,
    value: ''
  })

  return enumeration
}

const fixUnsupportedEnumKey = (
  enumeration: ApiEnumerationInterface[],
  key: ApiEnumerationKeyTypes
) => {
  const filteredEnumeration = enumeration.filter(item => {
    return item.key !== key
  })

  return filteredEnumeration
}

const apiFixLayers = (callback?: () => void) => {
  const { errors }: ApiLayerErrorStoreInterface = ApiLayerErrorStore.get()

  Object.keys(errors).forEach(modelId => {
    const model = searchModelById(modelId)
    const modelErrors = errors[modelId]

    if (model && modelErrors && !isEmpty(modelErrors)) {
      let enumeration = [...model.enumeration]

      modelErrors.forEach(error => {
        const { errorLevel, enumKey, errorType } = error

        if (errorLevel === 'fixable' && enumKey) {
          switch (errorType) {
            case 'missingEnumKey':
              enumeration = fixMissingEnumKey(enumeration, enumKey, model.coreType!)
              break
            case 'unsupportedEnumKey':
              enumeration = fixUnsupportedEnumKey(enumeration, enumKey)
              break
            default:
              break
          }
        }
      })

      model.enumeration = enumeration

      updateItemInModelStore(model)
    }
  })

  apiSyncFixLayers()
  callback && callback()
}

export default apiFixLayers
