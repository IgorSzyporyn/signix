import QueryStore from '../QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import ExpandedInterface from '../../types/ExpandedInterface'

const updateExpandedInQueryStore = (expanded: ExpandedInterface) => {
  QueryStore.set((state: QueryStoreInterface) => ({
    ...state,
    expanded: { ...state.expanded, ...expanded }
  }))
}

export default updateExpandedInQueryStore
