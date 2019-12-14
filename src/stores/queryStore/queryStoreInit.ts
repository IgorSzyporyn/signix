import QueryStoreInterface from '../../types/QueryStoreInterface'
import queryStoreDefaults from './queryStoreDefaults'

const queryStoreInit = (source: Partial<QueryStoreInterface>) => {
  const settings: QueryStoreInterface = {
    ...queryStoreDefaults,
    ...source
  }

  return settings
}

export default queryStoreInit
