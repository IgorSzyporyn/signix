import { Store } from 'laco'
import LayerErrorStoreInterface from '../types/LayerErrorStoreInterface'
import layerErrorStoreDefaults from './layerErrorStore/layerErrorStoreDefaults'
import layerErrorStoreInit from './layerErrorStore/layerErrorStoreInit'

export const initLayerErrorStore = (values: LayerErrorStoreInterface) => {
  const initializedValues = layerErrorStoreInit(values)
  LayerErrorStore.set(() => initializedValues)
}

const LayerErrorStore = new Store({ ...layerErrorStoreDefaults })

const clone: any = window
clone.D = LayerErrorStore

export default LayerErrorStore
