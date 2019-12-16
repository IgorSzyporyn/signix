import LayerErrorStoreInterface from '../../types/LayerErrorStoreInterface'
import layerErrorStoreDefaults from './layerErrorStoreDefaults'

const layerErrorStoreInit = (source: LayerErrorStoreInterface) => {
  const settings: LayerErrorStoreInterface = {
    ...layerErrorStoreDefaults,
    ...source
  }

  return settings
}

export default layerErrorStoreInit
