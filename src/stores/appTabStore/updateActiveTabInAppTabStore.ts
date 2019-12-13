import AppTabStoreInterface from '../../types/AppTabStoreInterface'
import AppTabStore from '../AppTabStore'

const updateActiveTabInAppTabStore = (
  activeTab: Partial<AppTabStoreInterface>
) => {
  AppTabStore.set((state: AppTabStoreInterface) => ({ ...state, ...activeTab }))
}

export default updateActiveTabInAppTabStore
