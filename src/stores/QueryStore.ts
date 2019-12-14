import { Store } from 'laco'
import QueryStoreInterface from '../types/QueryStoreInterface'
import queryStoreDefaults from './queryStore/queryStoreDefaults'
import queryStoreInit from './queryStore/queryStoreInit'

export const initQueryStore = (values: Partial<QueryStoreInterface>) => {
  const initializedValues = queryStoreInit(values)
  QueryStore.set(() => initializedValues)
}

const QueryStore = new Store({ ...queryStoreDefaults })

export default QueryStore
