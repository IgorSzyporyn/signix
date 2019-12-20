import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncDataFetch = (valid: boolean, data: object, errors?: ApiErrorInterface[]) => {
  if (valid) {
    updateDataInApiQueryStore(data)
  } else {
    updateDataInApiQueryStore({})
    updateDataKeysInApiQueryStore([])
  }

  updateApiQueryErrorStore({ dataFetch: errors })
}

export default apiSyncDataFetch
