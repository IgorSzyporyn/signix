import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import apiQueryStoreDefaults from './apiQueryStoreDefaults'

const apiQueryStoreInit = (source: Partial<ApiQueryStoreInterface>) => {
  const settings: ApiQueryStoreInterface = {
    ...apiQueryStoreDefaults,
    ...source
  }

  return settings
}

export default apiQueryStoreInit
