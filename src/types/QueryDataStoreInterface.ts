import QueryDataStoreModelInterface from './QueryDataStoreModelInterface'
import QueryDataStoreDataInterface from './QueryDataStoreDataInterface'

type QueryDataStoreInterface = {
  data: QueryDataStoreDataInterface
  dataKeys: string[]
  model: QueryDataStoreModelInterface
}

export default QueryDataStoreInterface
