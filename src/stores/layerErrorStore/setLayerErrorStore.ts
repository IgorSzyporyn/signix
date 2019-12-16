import LayerErrorStoreInterface from '../../types/LayerErrorStoreInterface'
import LayerErrorStore from '../LayerErrorStore'

const setLayerErrorStore = (source: LayerErrorStoreInterface) => {
  LayerErrorStore.set(() => source)
}

export default setLayerErrorStore
