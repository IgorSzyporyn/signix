import ApiStoreDataQueryInterface from '../types/ApiStoreDataQueryInterface'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import { isPlainObject } from 'lodash'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'

type Callback = (valid: boolean, error: ApiErrorInterface[]) => void

const validateDataEndpointFetch = async (
  props: ApiStoreDataQueryInterface,
  callback: Callback
) => {
  const { dynamic, dynamicKey, dynamicTestKey } = props
  const url = `${props.url}${dynamic ? `?${dynamicKey}=${dynamicTestKey}` : ''}`

  let valid = false
  let response: Response | null = null
  let httpStatusError = false
  const error: ApiErrorInterface[] = []
  let data: any | null = null

  try {
    response = await fetch(url)

    if (response && response.status) {
      httpStatusError = response.status >= 400
      data = await response.json()
    }
  } catch (e) {}

  if (!response) {
    error.push({
      id: 'validateEndpointFetch',
      text: 'Could not complete a HTTP request',
      errorLevel: 'critical',
      name: 'Endpoint Fetch HTTP Request'
    })
  } else if (httpStatusError) {
    error.push({
      id: 'validateEndpointFetch',
      text: `HTTP request returned ${response.status} as status code`,
      errorLevel: 'critical',
      name: 'Endpoint Fetch HTTP Request'
    })
  } else if (data) {
    valid = isPlainObject(data)

    if (!valid) {
      error.push({
        id: 'validateEndpointFetch',
        text: `Returned JSON response is not a plain object`,
        errorLevel: 'critical',
        name: 'Endpoint Fetch HTTP Request'
      })

      if (Array.isArray(data)) {
        error.push({
          id: 'validateEndpointFetch',
          text: `Returned JSON response is an array instead of an object`,
          errorLevel: 'critical',
          name: 'Endpoint Fetch HTTP Request'
        })
      }
    }
  } else if (!data) {
    error.push({
      id: 'validateEndpointFetch',
      text: `No returned JSON object`,
      errorLevel: 'critical',
      name: 'Endpoint Fetch HTTP Request'
    })
  }

  if (valid) {
    updateDataInApiQueryStore(data)
  } else {
    updateDataInApiQueryStore({})
    updateDataKeysInApiQueryStore([])
  }

  callback(valid, error)
}

export default validateDataEndpointFetch
