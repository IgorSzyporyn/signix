import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiLayerErrorStore from '../ApiLayerErrorStore'

const updateApiLayerErrorStore = (source: Partial<ApiLayerErrorStoreInterface>) => {
  ApiLayerErrorStore.set((state: ApiLayerErrorStoreInterface) => ({
    ...state,
    ...source
  }))
}

export default updateApiLayerErrorStore
