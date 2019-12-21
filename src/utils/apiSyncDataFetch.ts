import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import updateApiQueryStore from '../stores/apiQueryStore/updateApiQueryStore'

const apiSyncDataFetch = (valid: boolean, data: object, errors?: ApiErrorInterface[]) => {
  if (valid) {
    updateDataInApiQueryStore(data)
  } else {
    updateDataInApiQueryStore({})
    updateDataKeysInApiQueryStore([])
  }

  updateApiQueryStore({ dataTested: true, dataValid: valid })
  updateApiQueryErrorStore({ dataFetch: errors })
}

export default apiSyncDataFetch
