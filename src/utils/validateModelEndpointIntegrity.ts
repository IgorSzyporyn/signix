import ApiQueryStore from '../stores/ApiQueryStore'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'

type Callback = (valid: boolean, errors: string[]) => void

const validateModelEndpointIntegrity = (callback: Callback) => {
  const { dataKeys, model }: ApiQueryStoreInterface = ApiQueryStore.get()

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
