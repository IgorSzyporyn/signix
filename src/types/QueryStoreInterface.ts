import ExpandedInterface from './ExpandedInterface'
import QueryStoreDataInterface from './QueryStoreDataInterface'
import QueryStoreModelInterface from './QueryStoreModelInterface'

type QueryStoreInterface = {
  enabled: boolean
  expanded: ExpandedInterface
  valid: boolean
  tested: boolean
  validating: boolean
  data: QueryStoreDataInterface
  model: QueryStoreModelInterface
}

export default QueryStoreInterface
