import ApiQueryStore from '../stores/ApiQueryStore'
import ApiStoreInterface from '../types/ApiStoreInterface'
import ApiStore from '../stores/ApiStore'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import updateDataKeysInApiQueryStore from '../stores/apiQueryStore/updateDataKeysInApiQueryStore'

type Callback = (valid: boolean) => void

const validateDataEndpointWrite = (callback: Callback) => {
  const { data }: ApiQueryStoreInterface = ApiQueryStore.get()
  const { data: options }: ApiStoreInterface = ApiStore.get()
  const { dynamicKey } = options

  let noWriteErrors = false

  try {
    const dataKeys = Object.keys(data)
      .filter(key => {
        if (key !== dynamicKey) {
          return true
        } else {
          return false
        }
      })
      .map(i => i)

    updateDataKeysInApiQueryStore(dataKeys)

    noWriteErrors = true
  } catch (e) {}

  callback(noWriteErrors)
}

export default validateDataEndpointWrite
