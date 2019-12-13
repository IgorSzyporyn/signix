import AppStoreActionAreaInterface from '../../types/AppStoreActionAreaInterface'
import AppStoreInterface from '../../types/AppStoreInterface'
import AppStore from '../AppStore'

const updateActionAreaInAppStore = (
  actionArea: Partial<AppStoreActionAreaInterface>
) => {
  AppStore.set((state: AppStoreInterface) => ({
    ...state,
    actionArea: {
      ...state.actionArea,
      ...actionArea
    }
  }))
}

export default updateActionAreaInAppStore
