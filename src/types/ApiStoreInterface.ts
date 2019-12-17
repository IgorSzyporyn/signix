import ExpandedInterface from './ExpandedInterface'
import ApiStoreDataQueryInterface from './ApiStoreDataQueryInterface'
import ApiStoreModelQueryInterface from './ApiStoreModelQueryInterface'

type ApiStoreInterface = {
  enabled: boolean
  expanded: ExpandedInterface
  dataQuery: ApiStoreDataQueryInterface
  modelQuery: ApiStoreModelQueryInterface
}

export default ApiStoreInterface
