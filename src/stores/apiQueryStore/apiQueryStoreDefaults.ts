import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const apiQueryStoreDefaults: ApiQueryStoreInterface = {
  data: {},
  dataKeys: [],
  dataTested: false,
  dataValid: false,
  model: {},
  modelTested: false,
  modelValid: false,
  valid: false,
  validating: false,
  tested: false
}

export default apiQueryStoreDefaults
