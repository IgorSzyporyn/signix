import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncModelIntegrity = (
  valid: boolean,
  errors?: ApiErrorInterface[]
) => {
  updateApiQueryErrorStore({ modelIntegrity: errors })
}

export default apiSyncModelIntegrity
