import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiQueryErrorStoreDataFetchKey = 'dataFetch'

const apiSyncDataFetch = (
  valid: boolean,
  data: object,
  errors?: ApiErrorInterface[]
) => {
  if (valid) {
    removeItemInApiQueryErrorStore(apiQueryErrorStoreDataFetchKey)
    updateDataInApiQueryStore(data)
  } else {
    updateDataInApiQueryStore({})
    updateDataKeysInApiQueryStore([])

    if (errors) {
      updateApiQueryErrorStore({
        [apiQueryErrorStoreDataFetchKey]: errors
      })
    }
  }
}

export default apiSyncDataFetch
