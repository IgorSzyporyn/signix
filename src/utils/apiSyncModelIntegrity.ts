import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiQueryErrorStoreModelIntegrityKey = 'modelIntegrity'

const apiSyncModelIntegrity = (valid: boolean, error?: ApiErrorInterface[]) => {
  if (valid) {
    removeItemInApiQueryErrorStore(apiQueryErrorStoreModelIntegrityKey)
  } else {
    if (error) {
      updateApiQueryErrorStore({ [apiQueryErrorStoreModelIntegrityKey]: error })
    }
  }
}

export default apiSyncModelIntegrity
