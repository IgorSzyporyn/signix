import SettingsActionInterface from '../../types/SettingsActionInterface'
import SettingsStore, { SettingsStoreInterface } from '../SettingsStore'

const updateActionInSettingsStore = (
  action: Partial<SettingsActionInterface>
) => {
  SettingsStore.set((state: SettingsStoreInterface) => ({
    ...state,
    action: {
      ...state.action,
      ...action
    }
  }))
}

export default updateActionInSettingsStore
