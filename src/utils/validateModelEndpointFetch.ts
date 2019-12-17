import updateModelInApiQueryStore from '../stores/apiQueryStore/updateModelInApiQueryStore'
import ApiStoreModelQueryInterface from '../types/ApiStoreModelQueryInterface'

type Callback = (valid: boolean) => void

const validateModelEndpointFetch = async (
  props: ApiStoreModelQueryInterface,
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
    updateModelInApiQueryStore(model)
  } else {
    updateModelInApiQueryStore({})
  }

  callback(noFetchError)
}

export default validateModelEndpointFetch
