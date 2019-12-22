import ApiEnumerationInterface from '../types/ApiEnumerationInterface'
import ApiEnumerationKeyTypes from '../types/ApiEnumerationKeyTypes'
import ModelCoreTypes from '../types/ModelCoreTypes'

const apiFixMissingEnumKey = (
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

export default apiFixMissingEnumKey
