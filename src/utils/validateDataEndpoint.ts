import removeItemFromApiQueryErrorStore from '../stores/apiQueryErrorStore/removeItemFromApiQueryErrorStore'
import updateApiQueryErrorStore from '../stores/apiQueryErrorStore/updateApiQueryErrorStore'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

type Callback = (valid: boolean, error: ApiErrorInterface | null) => void

const validateDataEndpoint = async (url: string, callback: Callback) => {
  let valid = false
  let response: Response | null = null
  let httpStatusError = false
  let error: ApiErrorInterface | null = null

  try {
    response = await fetch(url)

    // @TODO - Lots of other stuff can indicate a problem...
    if (response && response.status) {
      httpStatusError = response.status >= 400
      valid = httpStatusError === false
    }
  } catch (e) {}

  if (!response) {
    error = {
      id: 'validateEndpoint',
      text: 'Could not complete a HTTP request',
      errorLevel: 'critical',
      name: 'Endpoint HTTP Request'
    }
  } else if (httpStatusError) {
    error = {
      id: 'validateEndpoint',
      text: `HTTP request returned ${response.status} as status code`,
      errorLevel: 'critical',
      name: 'Endpoint HTTP Request'
    }
  }

  if (error) {
    updateApiQueryErrorStore({ validateDataEndpoint: [error] })
    updateDataInApiQueryStore({})
    updateDataKeysInApiQueryStore([])
  } else {
    removeItemFromApiQueryErrorStore('validateDataEndpoint')
  }

  callback(valid, error)
}

export default validateDataEndpoint
