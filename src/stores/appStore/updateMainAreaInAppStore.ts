import AppStoreInterface from '../../types/AppStoreInterface'
import AppStoreMainAreaInterface from '../../types/AppStoreMainAreaInterface'
import AppStore from '../AppStore'

const updateMainAreaInAppStore = (main: Partial<AppStoreMainAreaInterface>) => {
  AppStore.set((state: AppStoreInterface) => ({
    ...state,
    mainArea: {
      ...state.mainArea,
      ...main
    }
  }))
}

export default updateMainAreaInAppStore
