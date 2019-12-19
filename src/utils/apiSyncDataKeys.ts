import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncDataKeys = (
  valid: boolean,
  dataKeys?: string[],
  error?: ApiErrorInterface[]
) => {
  if (valid) {
    removeItemInApiQueryErrorStore('dataKeys')
    updateDataKeysInApiQueryStore(dataKeys || [])
  } else {
    updateDataKeysInApiQueryStore([])

    if (error) {
      updateApiQueryErrorStore({ dataKeys: error })
    }
  }
}

export default apiSyncDataKeys
