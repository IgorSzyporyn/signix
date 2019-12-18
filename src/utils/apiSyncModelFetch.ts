import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import updateModelInApiQueryStore from '../stores/apiQueryStore/updateModelInApiQueryStore'

const apiQueryErrorStoreModelFetchKey = 'modelFetch'

const apiSyncModelFetch = (
  valid: boolean,
  model: object,
  errors?: ApiErrorInterface[]
) => {
  if (valid) {
    removeItemInApiQueryErrorStore(apiQueryErrorStoreModelFetchKey)
    updateModelInApiQueryStore(model)
  } else {
    updateModelInApiQueryStore({})

    if (errors) {
      updateApiQueryErrorStore({
        [apiQueryErrorStoreModelFetchKey]: errors
      })
    }
  }
}

export default apiSyncModelFetch
