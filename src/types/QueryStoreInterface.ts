import ExpandedInterface from './ExpandedInterface'
import QueryStoreDataInterface from './QueryStoreDataInterface'
import QueryStoreModelInterface from './QueryStoreModelInterface'

type QueryStoreInterface = {
  enabled: boolean
  expanded: ExpandedInterface
  data: QueryStoreDataInterface
  model: QueryStoreModelInterface
}

export default QueryStoreInterface
