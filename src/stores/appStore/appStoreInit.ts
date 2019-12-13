import AppStoreInterface from '../../types/AppStoreInterface'
import appStoreDefaults from './appStoreDefaults'

const appStoreInit = (source: AppStoreInterface) => {
  const settings: AppStoreInterface = { ...appStoreDefaults, ...source }

  return settings
}

export default appStoreInit
