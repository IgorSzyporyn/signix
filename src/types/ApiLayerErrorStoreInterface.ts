import ApiLayerErrorStoreErrorsInterface from './ApiLayerErrorStoreErrorsInterface'

type ApiLayerErrorStoreInterface = {
  tested: boolean
  valid: boolean
  fixed: boolean
  attempedFixed: boolean
  errors: ApiLayerErrorStoreErrorsInterface
}

export default ApiLayerErrorStoreInterface
