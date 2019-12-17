import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiLayerErrorStore from '../ApiLayerErrorStore'

const setApiLayerErrorStore = (source: ApiLayerErrorStoreInterface) => {
  ApiLayerErrorStore.set(() => source)
}

export default setApiLayerErrorStore
