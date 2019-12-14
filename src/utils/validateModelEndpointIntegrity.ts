import QueryDataStore from '../stores/QueryDataStore'
import QueryDataStoreInterface from '../types/QueryDataStoreInterface'

type Callback = (valid: boolean, errors: string[]) => void

const validateModelEndpointIntegrity = (callback: Callback) => {
  const { dataKeys, model }: QueryDataStoreInterface = QueryDataStore.get()

  let noIntegrityErrors = true
  const errors: string[] = []

  Object.keys(model).forEach(key => {
    if (!dataKeys.includes(key)) {
      noIntegrityErrors = false
      errors.push(`Model key "${key}" is not in fetched example data`)
    }
  })

  callback(noIntegrityErrors, errors)
}

export default validateModelEndpointIntegrity
