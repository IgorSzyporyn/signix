import ApiQueryStore from '../stores/ApiQueryStore'
import ApiStore from '../stores/ApiStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../types/ApiStoreInterface'
import apiSyncDataKeys from './apiSyncDataKeys'

const apiValidateDataKeys = (callback?: (valid: boolean, errors: ApiErrorInterface[]) => void) => {
  const { data }: ApiQueryStoreInterface = ApiQueryStore.get()
  const { dataQuery }: ApiStoreInterface = ApiStore.get()
  const { dynamicKey } = dataQuery

  let valid = false
  let dataKeys: string[] = []

  let error: ApiErrorInterface | undefined = {
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
    error = undefined
  }

  apiSyncDataKeys(valid, dataKeys, error ? [error] : [])
  callback && callback(valid, error ? [error] : [])
}

export default apiValidateDataKeys
