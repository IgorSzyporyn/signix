import QueryDataStore from '../stores/QueryDataStore'
import QueryStoreInterface from '../types/QueryStoreInterface'
import QueryStore from '../stores/QueryStore'
import QueryDataStoreInterface from '../types/QueryDataStoreInterface'
import updateDataKeysInQueryDataStore from '../stores/queryDataStore/updateDataKeysInQueryDataStore'

type Callback = (valid: boolean) => void

const validateDataEndpointWrite = (callback: Callback) => {
  const { data }: QueryDataStoreInterface = QueryDataStore.get()
  const { data: options }: QueryStoreInterface = QueryStore.get()
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

    updateDataKeysInQueryDataStore(dataKeys)

    noWriteErrors = true
  } catch (e) {}

  callback(noWriteErrors)
}

export default validateDataEndpointWrite
