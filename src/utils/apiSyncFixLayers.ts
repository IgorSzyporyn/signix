import apiValidateLayers from './apiValidateLayers'
import updateApiLayerErrorStore from '../stores/apiLayerErrorStore/updateApiLayerErrorStore'

const apiSyncFixLayers = () => {
  apiValidateLayers(valid => {
    updateApiLayerErrorStore({
      fixed: valid,
      attempedFixed: true
    })
  })
}

export default apiSyncFixLayers
