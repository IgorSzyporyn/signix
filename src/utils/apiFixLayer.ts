import { isEmpty } from 'lodash'
import ApiLayerErrorStore from '../stores/ApiLayerErrorStore'
import { searchModelById } from '../stores/model/getModelById'
import updateItemInModelStore from '../stores/model/updateItemInModelStore'
import ApiLayerErrorStoreInterface from '../types/ApiLayerErrorStoreInterface'
import apiFixMissingEnumKey from './apiFixMissingEnumKey'
import apiFixUnsupportedEnumKey from './apiFixUnsupportedEnumKey'
import apiSyncFixLayers from './apiSyncFixLayers'

const apiFixLayer = (modelId: string, callback?: () => void) => {
  const { errors }: ApiLayerErrorStoreInterface = ApiLayerErrorStore.get()
  const modelErrors = errors[modelId]
  const model = searchModelById(modelId)

  if (model && modelErrors && !isEmpty(modelErrors)) {
    let enumeration = [...model.enumeration]

    modelErrors.forEach(error => {
      const { errorLevel, enumKey, errorType } = error

      if (errorLevel === 'fixable') {
        switch (errorType) {
          case 'missingEnumKeyFromModel':
            if (enumKey !== undefined) {
              enumeration = apiFixMissingEnumKey(enumeration, enumKey, model.coreType!)
            }
            break
          case 'enumKeyNotInModel':
            if (enumKey !== undefined) {
              enumeration = apiFixUnsupportedEnumKey(enumeration, enumKey)
            }
            break
          case 'apiKeyNotInModel':
            enumeration = []
            break
          default:
            break
        }
      }
    })

    model.enumeration = enumeration
    updateItemInModelStore(model)
  }

  apiSyncFixLayers()
  callback && callback()
}

export default apiFixLayer
