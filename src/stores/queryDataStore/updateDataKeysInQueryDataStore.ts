import QueryDataStore from '../QueryDataStore'
import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'

const updateDataKeysInQueryDataStore = (dataKeys: string[]) => {
  QueryDataStore.set((state: QueryDataStoreInterface) => ({
    ...state,
    dataKeys
  }))
}

export default updateDataKeysInQueryDataStore
