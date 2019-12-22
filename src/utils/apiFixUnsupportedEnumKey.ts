import ApiEnumerationInterface from '../types/ApiEnumerationInterface'
import ApiEnumerationKeyTypes from '../types/ApiEnumerationKeyTypes'

const apiFixUnsupportedEnumKey = (
  enumeration: ApiEnumerationInterface[],
  key: ApiEnumerationKeyTypes
) => {
  const filteredEnumeration = enumeration.filter(item => {
    return item.key !== key
  })

  return filteredEnumeration
}

export default apiFixUnsupportedEnumKey
