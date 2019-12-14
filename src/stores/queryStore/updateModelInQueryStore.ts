import QueryStoreModelInterface from '../../types/QueryStoreModelInterface'
import QueryStore from '../QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'

const updateModelInQueryStore = (model: Partial<QueryStoreModelInterface>) => {
  QueryStore.set((state: QueryStoreInterface) => ({
    ...state,
    model: { ...state.model, ...model }
  }))
}

export default updateModelInQueryStore
