import LayerErrorStoreInterface from '../../types/LayerErrorStoreInterface'
import LayerErrorStore from '../LayerErrorStore'

const updateLayerErrorStore = (source: LayerErrorStoreInterface) => {
  LayerErrorStore.set((state: LayerErrorStoreInterface) => ({
    ...state,
    ...source
  }))
}

export default updateLayerErrorStore
