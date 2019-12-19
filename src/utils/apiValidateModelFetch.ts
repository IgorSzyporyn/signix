import ApiStore from '../stores/ApiStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import ApiStoreInterface from '../types/ApiStoreInterface'
import apiSyncModelFetch from './apiSyncModelFetch'

type Callback = (valid: boolean, error: ApiErrorInterface[] | undefined) => void

const apiValidateModelFetch = async (callback?: Callback) => {
  const { modelQuery }: ApiStoreInterface = ApiStore.get()

  let valid = false
  let error: ApiErrorInterface[] = []

  if (modelQuery.url) {
    fetch(modelQuery.url)
      .then(response => {
        const { status } = response

        if (status >= 400) {
          error.push({
            id: 'validateModelFetch',
            text: `HTTP request returned ${status} as status code`,
            errorLevel: 'critical',
            name: 'Model Fetch HTTP Request'
          })
        }

        return response
      })
      .then(r => r.json())
      .then(json => {
        let model = {}

        if (Array.isArray(json)) {
          error.push({
            id: 'validateModelFetch',
            text: 'Returned data is an array instead of an object',
            errorLevel: 'critical',
            name: 'Model Fetch HTTP Request'
          })
        } else {
          model = json
          valid = true
        }

        apiSyncModelFetch(valid, model, error)
        callback && callback(valid, error)
      })
      .catch(e => {
        error.push({
          id: 'validateModelFetch',
          text: e.message,
          errorLevel: 'critical',
          name: 'Model Fetch HTTP Request'
        })

        apiSyncModelFetch(valid, {}, error)
        callback && callback(valid, error)
      })
  } else {
    error.push({
      id: 'validateModelFetch',
      text: 'No URL provided',
      errorLevel: 'critical',
      name: 'Model Fetch HTTP Request'
    })

    apiSyncModelFetch(valid, {}, error)
    callback && callback(valid, error)
  }
}

export default apiValidateModelFetch
