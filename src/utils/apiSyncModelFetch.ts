import removeItemInApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemInApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateModelInApiQueryStore from '../stores/apiQueryStore/updateModelInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncModelFetch = (
  valid: boolean,
  model: object,
  errors?: ApiErrorInterface[]
) => {
  if (valid) {
    removeItemInApiQueryErrorStore('modelFetch')
    updateModelInApiQueryStore(model)
  } else {
    updateModelInApiQueryStore({})

    if (errors) {
      updateApiQueryErrorStore({ modelFetch: errors })
    }
  }
}

export default apiSyncModelFetch
