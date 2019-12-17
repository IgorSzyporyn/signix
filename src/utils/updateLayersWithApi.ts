import { searchModelById } from '../stores/model/getModelById'
import updateItemInModelStore from '../stores/model/updateItemInModelStore'
import ApiEnumerationInterface from '../types/ApiEnumerationInterface'
import ApiEnumerationKeyTypes from '../types/ApiEnumerationKeyTypes'
import GroupedLayerErrorsInterface from '../types/GroupedLayerErrorsInterface'
import ModelCoreTypes from '../types/ModelCoreTypes'

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

type Callback = () => void

const updateLayersWithApi = (
  errors: GroupedLayerErrorsInterface,
  callback: Callback
) => {
  Object.keys(errors).forEach(modelId => {
    const model = searchModelById(modelId)

    if (model) {
      let enumeration = [...model.enumeration]
      const groupedError = errors[modelId]

      groupedError.forEach(error => {
        const { errorLevel, enumKey, errorType } = error

        if (errorLevel === 'fixable' && enumKey) {
          switch (errorType) {
            case 'missingEnumKey':
              enumeration = fixMissingEnumKey(
                enumeration,
                enumKey,
                model.coreType!
              )
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

  callback()
}

export default updateLayersWithApi
