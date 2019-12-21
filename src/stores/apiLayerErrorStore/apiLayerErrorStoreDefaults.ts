import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'

const apiLayerErrorStoreDefaults: ApiLayerErrorStoreInterface = {
  valid: true,
  tested: false,
  fixed: false,
  attempedFixed: false,
  errors: {}
}

export default apiLayerErrorStoreDefaults
