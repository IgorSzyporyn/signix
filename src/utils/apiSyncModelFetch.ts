import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateModelInApiQueryStore from '../stores/apiQueryStore/updateModelInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

const apiSyncModelFetch = (
  valid: boolean,
  model: object,
  errors?: ApiErrorInterface[]
) => {
  if (valid) {
    updateModelInApiQueryStore(model)
  } else {
    updateModelInApiQueryStore({})
  }

  updateApiQueryErrorStore({ modelFetch: errors })
}

export default apiSyncModelFetch
