import ApiStore from '../stores/ApiStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import ApiStoreInterface from '../types/ApiStoreInterface'
import apiSyncDataFetch from './apiSyncDataFetch'

type Callback = (valid: boolean, error: ApiErrorInterface[] | undefined) => void

const apiValidateDataFetch = async (callback?: Callback) => {
  const { dataQuery }: ApiStoreInterface = ApiStore.get()
  const { dynamic, dynamicKey, dynamicTestKey } = dataQuery
  const url = `${dataQuery.url}${
    dynamic ? `?${dynamicKey}=${dynamicTestKey}` : ''
  }`

  let valid = false
  let error: ApiErrorInterface[] = []

  if (dataQuery.url) {
    fetch(url)
      .then(response => {
        const { status } = response

        if (status >= 400) {
          error.push({
            id: 'validateDataFetch',
            text: `Request returned ${status} as status code`,
            errorLevel: 'critical',
            name: 'Data Fetch HTTP Request'
          })
        }
        return response
      })
      .then(r => r.json())
      .then(json => {
        let data = {}

        if (Array.isArray(json)) {
          error.push({
            id: 'validateDataFetch',
            text: 'Returned data is an array instead of an object',
            errorLevel: 'critical',
            name: 'Data Fetch HTTP Request'
          })
        } else {
          data = json
          valid = true
        }

        apiSyncDataFetch(valid, data, error)
        callback && callback(valid, error)
      })
      .catch(e => {
        error.push({
          id: 'validateDataFetch',
          text: e.message,
          errorLevel: 'critical',
          name: 'Data Fetch HTTP Request'
        })

        apiSyncDataFetch(valid, {}, error)
        callback && callback(valid, error)
      })
  } else {
    error.push({
      id: 'validateDataFetch',
      text: 'No URL provided',
      errorLevel: 'critical',
      name: 'Data Fetch HTTP Request'
    })

    apiSyncDataFetch(valid, {}, error)
    callback && callback(valid, error)
  }
}

export default apiValidateDataFetch
