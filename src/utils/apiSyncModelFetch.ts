import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateModelInApiQueryStore from '../stores/apiQueryStore/updateModelInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import updateApiQueryStore from '../stores/apiQueryStore/updateApiQueryStore'

const apiSyncModelFetch = (valid: boolean, model: object, errors?: ApiErrorInterface[]) => {
  if (valid) {
    updateModelInApiQueryStore(model)
  } else {
    updateModelInApiQueryStore({})
  }

  updateApiQueryStore({ modelTested: true, modelValid: valid })
  updateApiQueryErrorStore({ modelFetch: errors })
}

export default apiSyncModelFetch
