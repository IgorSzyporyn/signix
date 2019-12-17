import ApiQueryStoreModelInterface from './ApiQueryStoreModelInterface'
import ApiQueryStoreDataInterface from './ApiQueryStoreDataInterface'

type ApiQueryStoreInterface = {
  data: ApiQueryStoreDataInterface
  dataKeys: string[]
  model: ApiQueryStoreModelInterface
}

export default ApiQueryStoreInterface
