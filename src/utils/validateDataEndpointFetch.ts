import ApiStoreDataQueryInterface from '../types/ApiStoreDataQueryInterface'
import updateDataInApiQueryStore from '../stores/apiQueryStore/updateDataInQueryDataStore'

type Callback = (valid: boolean) => void

const validateDataEndpointFetch = async (
  props: ApiStoreDataQueryInterface,
  callback: Callback
) => {
  const { dynamic, dynamicKey, dynamicTestKey } = props
  const url = `${props.url}${dynamic ? `?${dynamicKey}=${dynamicTestKey}` : ''}`

  let noFetchError = false
  let data: any | null = null

  try {
    const response = await fetch(url)

    if (response.status === 200) {
      noFetchError = true
      data = await response.json()
    }
  } catch (e) {}

  if (noFetchError && data) {
    updateDataInApiQueryStore(data)
  }

  callback(noFetchError)
}

export default validateDataEndpointFetch
