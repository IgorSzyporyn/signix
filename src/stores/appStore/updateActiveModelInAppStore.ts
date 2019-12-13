import AppStoreInterface from '../../types/AppStoreInterface'
import AppStore from '../AppStore'

const updateActiveModelInAppStore = (id?: string) => {
  AppStore.set((state: AppStoreInterface) => ({ ...state, activeModelId: id }))
}

export default updateActiveModelInAppStore
