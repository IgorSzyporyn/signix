import ApiStoreModelQueryInterface from '../types/ApiStoreModelQueryInterface'
import ApiStoreDataQueryInterface from '../types/ApiStoreDataQueryInterface'

const validateQueryEntries = (
  data: ApiStoreDataQueryInterface,
  model: ApiStoreModelQueryInterface
) => {
  if (!data.url) {
    return false
  }

  if (data.dynamic && !data.dynamicKey) {
    return false
  }

  if (data.dynamic && !data.dynamicTestKey) {
    return false
  }

  return true
}

export default validateQueryEntries
