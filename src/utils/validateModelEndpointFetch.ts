import updateModelInQueryDataStore from '../stores/queryDataStore/updateModelInQueryDataStore'
import QueryStoreModelInterface from '../types/QueryStoreModelInterface'

type Callback = (valid: boolean) => void

const validateModelEndpointFetch = async (
  props: QueryStoreModelInterface,
  callback: Callback
) => {
  const { url } = props

  let noFetchError = false
  let model: any | null = null

  try {
    const response = await fetch(url)

    if (response.status === 200) {
      model = await response.json()

      if (model) {
        noFetchError = true
      }
    }
  } catch (e) {}

  if (noFetchError) {
    updateModelInQueryDataStore(model)
  }

  callback(noFetchError)
}

export default validateModelEndpointFetch
