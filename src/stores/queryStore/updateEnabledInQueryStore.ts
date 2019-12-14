import QueryStore from '../QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'

const updateEnabledInQueryStore = (enabled: boolean) => {
  QueryStore.set((state: QueryStoreInterface) => ({
    ...state,
    enabled
  }))
}

export default updateEnabledInQueryStore
