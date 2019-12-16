import { searchModelById } from '../stores/model/getModelById'
import updateItemInModelStore from '../stores/model/updateItemInModelStore'
import ModelCoreTypes from '../types/ModelCoreTypes'
import ModelEnumerationInterface from '../types/ModelEnumerationInterface'
import ModelEnumerationKeyTypes from '../types/ModelEnumerationKeyTypes'
import groupLayerErrorsById from './groupLayerErrorsById'
import { ValidateLayerModelResultItem } from './validateLayerModelIntegrity'
import resetLayerErrorStore from '../stores/layerErrorStore/resetLayerErrorStore'
import GroupedLayerErrorsInterface from '../types/GroupedLayerErrorsInterface'

const fixMissingEnumKey = (
  enumeration: ModelEnumerationInterface[],
  key: ModelEnumerationKeyTypes,
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
  enumeration: ModelEnumerationInterface[],
  key: ModelEnumerationKeyTypes
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
        const { errorLevel, enumKey, type } = error

        if (errorLevel === 'fixable' && enumKey) {
          switch (type) {
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
