import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'
import queryDataStoreDefaults from './queryDataStoreDefaults'

const queryDataStoreInit = (source: Partial<QueryDataStoreInterface>) => {
  const settings: QueryDataStoreInterface = {
    ...queryDataStoreDefaults,
    ...source
  }

  return settings
}

export default queryDataStoreInit
