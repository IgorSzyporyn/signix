import ApiStoreInterface from '../../types/ApiStoreInterface'

const apiStoreDefaults: ApiStoreInterface = {
  enabled: true,
  expanded: {
    queryData: true,
    queryModel: true
  },
  dataQuery: {
    url: '',
    dynamic: false,
    dynamicKey: '',
    dynamicTestKey: ''
  },
  modelQuery: {
    url: ''
  }
}

export default apiStoreDefaults
