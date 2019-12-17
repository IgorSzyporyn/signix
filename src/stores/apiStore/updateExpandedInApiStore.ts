import ApiStore from '../ApiStore'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import ExpandedInterface from '../../types/ExpandedInterface'

const updateExpandedInApiStore = (expanded: ExpandedInterface) => {
  ApiStore.set((state: ApiStoreInterface) => ({
    ...state,
    expanded: { ...state.expanded, ...expanded }
  }))
}

export default updateExpandedInApiStore
