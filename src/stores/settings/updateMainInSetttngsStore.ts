import SettingsMainInterface from '../../types/SettingsMainInterface'
import SettingsStore, { SettingsStoreInterface } from '../SettingsStore'

const updateMainInSettingsStore = (main: Partial<SettingsMainInterface>) => {
  SettingsStore.set((state: SettingsStoreInterface) => ({
    ...state,
    main: {
      ...state.main,
      ...main
    }
  }))
}

export default updateMainInSettingsStore
