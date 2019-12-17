import ApiQueryStoreModelInterface from './ApiQueryStoreModelInterface'
import ApiQueryStoreDataInterface from './ApiQueryStoreDataInterface'

type ApiQueryStoreInterface = {
  data: ApiQueryStoreDataInterface
  dataKeys: string[]
  model: ApiQueryStoreModelInterface
  valid?: boolean
  validating?: boolean
  tested?: boolean
}

export default ApiQueryStoreInterface
