import ApiStoreInterface from '../../types/ApiStoreInterface'
import apiStoreDefaults from './apiStoreDefaults'

const apiStoreInit = (source: Partial<ApiStoreInterface>) => {
  const settings: ApiStoreInterface = {
    ...apiStoreDefaults,
    ...source
  }

  return settings
}

export default apiStoreInit
