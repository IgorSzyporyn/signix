import QueryDataStore from '../QueryDataStore'
import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'

const updateModelInQueryDataStore = (model: object) => {
  QueryDataStore.set((state: QueryDataStoreInterface) => ({
    ...state,
    model
  }))
}

export default updateModelInQueryDataStore
