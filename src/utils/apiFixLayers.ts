import ApiLayerErrorStore from '../stores/ApiLayerErrorStore'
import ApiLayerErrorStoreInterface from '../types/ApiLayerErrorStoreInterface'
import apiFixLayer from './apiFixLayer'

const apiFixLayers = (callback?: () => void) => {
  const { errors }: ApiLayerErrorStoreInterface = ApiLayerErrorStore.get()

  Object.keys(errors).forEach(modelId => {
    apiFixLayer(modelId)
  })

  callback && callback()
}

export default apiFixLayers
