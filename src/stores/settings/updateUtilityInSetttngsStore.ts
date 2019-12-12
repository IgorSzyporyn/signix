import SettingsUtilityInterface from '../../types/SettingsUtilityInterface'
import SettingsStore, { SettingsStoreInterface } from '../SettingsStore'

const updateUtilityInSettingsStore = (
  utility: Partial<SettingsUtilityInterface>
) => {
  SettingsStore.set((state: SettingsStoreInterface) => ({
    ...state,
    utility: {
      ...state.utility,
      ...utility
    }
  }))
}

export default updateUtilityInSettingsStore
