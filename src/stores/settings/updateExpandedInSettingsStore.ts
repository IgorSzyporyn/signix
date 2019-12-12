import SettingsStore, { SettingsStoreInterface } from '../SettingsStore'

const updateExpandedInSettingsStore = (expanded: boolean, id?: string) => {
  if (id) {
    SettingsStore.set((state: SettingsStoreInterface) => ({
      ...state,
      expanded: {
        ...state.expanded,
        [id]: expanded
      }
    }))
  }
}

export default updateExpandedInSettingsStore
