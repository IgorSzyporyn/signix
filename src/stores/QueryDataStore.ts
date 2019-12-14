import { Store } from 'laco'
import QueryDataStoreInterface from '../types/QueryDataStoreInterface'
import queryDataStoreDefaults from './queryDataStore/queryDataStoreDefaults'
import queryDataStoreInit from './queryDataStore/queryDataStoreInit'

export const initQueryDataStore = (
  values: Partial<QueryDataStoreInterface>
) => {
  const initializedValues = queryDataStoreInit(values)
  QueryDataStore.set(() => initializedValues)
}

const QueryDataStore = new Store({ ...queryDataStoreDefaults })

const clone: any = window
clone.B = QueryDataStore

export default QueryDataStore
