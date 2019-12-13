import AppStoreInterface from '../../types/AppStoreInterface'
import AppStoreUtilityAreaInterface from '../../types/AppStoreUtilityAreaInterface'
import AppStore from '../AppStore'

const updateUtilityAreaInAppStore = (
  utility: Partial<AppStoreUtilityAreaInterface>
) => {
  AppStore.set((state: AppStoreInterface) => ({
    ...state,
    utilityArea: {
      ...state.utilityArea,
      ...utility
    }
  }))
}

export default updateUtilityAreaInAppStore
