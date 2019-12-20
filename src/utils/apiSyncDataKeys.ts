import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncDataKeys = (valid: boolean, dataKeys: string[], error?: ApiErrorInterface[]) => {
  if (valid) {
    updateDataKeysInApiQueryStore(dataKeys || [])
  } else {
    updateDataKeysInApiQueryStore([])
  }

  updateApiQueryErrorStore({ dataKeys: error })
}

export default apiSyncDataKeys
