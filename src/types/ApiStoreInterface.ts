import ExpandedInterface from './ExpandedInterface'
import ApiStoreDataQueryInterface from './ApiStoreDataQueryInterface'
import ApiStoreModelQueryInterface from './ApiStoreModelQueryInterface'

type ApiStoreInterface = {
  enabled: boolean
  expanded: ExpandedInterface
  valid: boolean
  tested: boolean
  validating: boolean
  data: ApiStoreDataQueryInterface
  model: ApiStoreModelQueryInterface
}

export default ApiStoreInterface
