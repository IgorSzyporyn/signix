import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncDataFetch = (
  valid: boolean,
  data: object,
  errors?: ApiErrorInterface[]
) => {
  if (valid) {
    removeItemInApiQueryErrorStore('dataFetch')
    updateDataInApiQueryStore(data)
  } else {
    updateDataInApiQueryStore({})
    updateDataKeysInApiQueryStore([])

    if (errors) {
      updateApiQueryErrorStore({ dataFetch: errors })
    }
  }
}

export default apiSyncDataFetch
