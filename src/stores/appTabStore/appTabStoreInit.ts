import AppTabStoreInterface from '../../types/AppTabStoreInterface'
import appTabStoreDefaults from './appTabStoreDefaults'

const appTabStoreInit = (source: Partial<AppTabStoreInterface>) => {
  const settings: AppTabStoreInterface = { ...appTabStoreDefaults, ...source }

  return settings
}

export default appTabStoreInit
