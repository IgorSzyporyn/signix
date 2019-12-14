import QueryStoreModelInterface from '../types/QueryStoreModelInterface'
import QueryStoreDataInterface from '../types/QueryStoreDataInterface'

const validateQueryEntries = (
  data: QueryStoreDataInterface,
  model: QueryStoreModelInterface
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
