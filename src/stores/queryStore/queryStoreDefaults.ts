import QueryStoreInterface from '../../types/QueryStoreInterface'

const queryStoreDefaults: QueryStoreInterface = {
  enabled: true,
  valid: false,
  validating: false,
  tested: false,
  expanded: {
    queryData: true,
    queryModel: true
  },
  data: {
    url: '',
    dynamic: false,
    dynamicKey: '',
    dynamicTestKey: ''
  },
  model: {
    url: ''
  }
}

export default queryStoreDefaults
