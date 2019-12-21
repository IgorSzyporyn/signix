import LayerStoreInterface from '../../types/LayerStoreInterface'
import LayerStore from '../LayerStore'

const updateLayerStore = (source: Partial<LayerStoreInterface>) => {
  LayerStore.set((state: LayerStoreInterface) => ({
    ...state,
    ...source
  }))
}

export default updateLayerStore
