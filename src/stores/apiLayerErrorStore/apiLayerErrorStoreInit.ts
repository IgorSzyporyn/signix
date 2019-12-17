import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import layerErrorStoreDefaults from './apiLayerErrorStoreDefaults'

const apiLayerErrorStoreInit = (source: ApiLayerErrorStoreInterface) => {
  const settings: ApiLayerErrorStoreInterface = {
    ...layerErrorStoreDefaults,
    ...source
  }

  return settings
}

export default apiLayerErrorStoreInit
