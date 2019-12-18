import ApiQueryStore from '../stores/ApiQueryStore'
import ApiErrorInterface from '../types/ApiErrorInterface'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import apiSyncModelIntegrity from './apiSyncModelIntegrity'

const apiValidateModelIntegrity = (
  callback?: (valid: boolean, error: ApiErrorInterface[] | undefined) => void
) => {
  const { dataKeys, model }: ApiQueryStoreInterface = ApiQueryStore.get()

  let valid = true
  const errors: ApiErrorInterface[] = []

  Object.keys(model).forEach(key => {
    if (!dataKeys.includes(key)) {
      valid = false
      errors.push({
        id: 'validateModelIntegrity',
        text: `Key "${key}" is not found in fetched data`,
        errorLevel: 'critical',
        name: 'Model Integrity'
      })
    }
  })

  apiSyncModelIntegrity(valid, errors)
  callback && callback(valid, errors)
}

export default apiValidateModelIntegrity
