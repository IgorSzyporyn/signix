import AppStoreInterface from '../../types/AppStoreInterface'
import AppStore from '../AppStore'

const updateExpandedInAppStore = (expanded: boolean, id?: string) => {
  if (id) {
    AppStore.set((state: AppStoreInterface) => ({
      ...state,
      expanded: {
        ...state.expanded,
        [id]: expanded
      }
    }))
  }
}

export default updateExpandedInAppStore
