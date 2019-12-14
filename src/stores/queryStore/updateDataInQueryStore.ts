import QueryStoreDataInterface from '../../types/QueryStoreDataInterface'
import QueryStore from '../QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'

const updateDataInQueryStore = (data: Partial<QueryStoreDataInterface>) => {
  QueryStore.set((state: QueryStoreInterface) => ({
    ...state,
    data: { ...state.data, ...data }
  }))
}

export default updateDataInQueryStore
