import QueryDataStore from '../QueryDataStore'
import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'

const updateDataInQueryDataStore = (data: object) => {
  QueryDataStore.set((state: QueryDataStoreInterface) => ({
    ...state,
    data
  }))
}

export default updateDataInQueryDataStore
