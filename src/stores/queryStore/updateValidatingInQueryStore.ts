import QueryStore from '../QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'

const updateValidatingInQueryStore = (validating: boolean) => {
  QueryStore.set((state: QueryStoreInterface) => ({ ...state, validating }))
}

export default updateValidatingInQueryStore
