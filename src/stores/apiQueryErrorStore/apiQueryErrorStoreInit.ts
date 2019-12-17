import ApiQueryErrorStoreInterface from '../../types/ApiQueryErrorStoreInterface'
import queryErrorStoreDefaults from './apiQueryErrorStoreDefaults'

const apiQueryErrorStoreInit = (source: ApiQueryErrorStoreInterface) => {
  const settings: ApiQueryErrorStoreInterface = {
    ...queryErrorStoreDefaults,
    ...source
  }

  return settings
}

export default apiQueryErrorStoreInit
