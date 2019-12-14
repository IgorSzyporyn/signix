import QueryStoreInterface from '../../types/QueryStoreInterface'
import QueryStore from '../QueryStore'

const updateQueryStore = (partial: Partial<QueryStoreInterface>) => {
  QueryStore.set((state: QueryStoreInterface) => ({
    ...state,
    ...partial
  }))
}

export default updateQueryStore
