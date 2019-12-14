import QueryStoreInterface from '../../types/QueryStoreInterface'

const queryStoreDefaults: QueryStoreInterface = {
  enabled: false,
  expanded: {
    queryData: false,
    queryModel: false
  },
  data: {
    url: ''
  },
  model: {}
}

export default queryStoreDefaults
