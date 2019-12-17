import ApiQueryStore from '../stores/ApiQueryStore'
import ApiStoreInterface from '../types/ApiStoreInterface'
import ApiStore from '../stores/ApiStore'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'

type Callback = (valid: boolean, error: ApiErrorInterface | null) => void

const validateDataEndpointWrite = (callback: Callback) => {
  const { data }: ApiQueryStoreInterface = ApiQueryStore.get()
  const { dataQuery: options }: ApiStoreInterface = ApiStore.get()
  const { dynamicKey } = options

  let valid = false
  let dataKeys: string[] = []

  let error: ApiErrorInterface | null = {
    id: 'validateEndpointWrite',
    text: 'No keys in data to write',
    errorLevel: 'critical',
    name: 'API Endpoint Keys Write'
  }

  try {
    dataKeys = Object.keys(data)
      .filter(key => {
        if (key !== dynamicKey) {
          return true
        } else {
          return false
        }
      })
      .map(i => i)
  } catch (e) {}

  if (dataKeys.length > 0) {
    valid = true
    error = null
  }

  updateDataKeysInApiQueryStore(dataKeys)

  callback(valid, error)
}

export default validateDataEndpointWrite
