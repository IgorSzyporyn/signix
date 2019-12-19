import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncModelIntegrity = (valid: boolean, error?: ApiErrorInterface[]) => {
  if (valid) {
    removeItemInApiQueryErrorStore('modelIntegrity')
  } else {
    if (error) {
      updateApiQueryErrorStore({ modelIntegrity: error })
    }
  }
}

export default apiSyncModelIntegrity
