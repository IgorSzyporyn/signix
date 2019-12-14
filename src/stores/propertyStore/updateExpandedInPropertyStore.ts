import PropertyStore from '../PropertyStore'
import PropertyStoreInterface from '../../types/PropertyStoreInterface'
import ExpandedInterface from '../../types/ExpandedInterface'

const updateExpandedInPropertyStore = (expanded: ExpandedInterface) => {
  PropertyStore.set((state: PropertyStoreInterface) => ({
    ...state,
    expanded: { ...state.expanded, ...expanded }
  }))
}

export default updateExpandedInPropertyStore
