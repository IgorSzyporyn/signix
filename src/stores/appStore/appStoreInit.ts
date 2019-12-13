import AppStoreInterface from '../../types/AppStoreInterface'
import appStoreDefaults from './appStoreDefaults'

const appStoreInit = (source: Partial<AppStoreInterface>) => {
  const settings: AppStoreInterface = { ...appStoreDefaults, ...source }

  return settings
}

export default appStoreInit
