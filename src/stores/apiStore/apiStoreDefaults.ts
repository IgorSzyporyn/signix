import ApiStoreInterface from '../../types/ApiStoreInterface'

const apiStoreDefaults: ApiStoreInterface = {
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

export default apiStoreDefaults
