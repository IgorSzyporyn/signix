import updateApiLayerErrorStore from '../stores/apiLayerErrorStore/updateApiLayerErrorStore'
import ApiLayerErrorStoreErrorsInterface from '../types/ApiLayerErrorStoreErrorsInterface'

const apiSyncValidateLayers = (valid: boolean, errors: ApiLayerErrorStoreErrorsInterface) => {
  updateApiLayerErrorStore({
    valid,
    tested: true,
    errors
  })
}

export default apiSyncValidateLayers
