import AppStoreInterface from '../../types/AppStoreInterface'
import AppStore from '../AppStore'

const updateEditingModelInAppStore = (id?: string) => {
  AppStore.set((state: AppStoreInterface) => ({ ...state, editingModel: id }))
}

export default updateEditingModelInAppStore
