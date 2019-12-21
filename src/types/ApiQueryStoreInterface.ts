import ApiQueryStoreModelInterface from './ApiQueryStoreModelInterface'
import ApiQueryStoreDataInterface from './ApiQueryStoreDataInterface'

type ApiQueryStoreInterface = {
  data: ApiQueryStoreDataInterface
  dataKeys: string[]
  dataTested: boolean
  dataValid: boolean
  model: ApiQueryStoreModelInterface
  modelTested: boolean
  modelValid: boolean
  valid: boolean
  validating: boolean
  tested: boolean
}

export default ApiQueryStoreInterface
