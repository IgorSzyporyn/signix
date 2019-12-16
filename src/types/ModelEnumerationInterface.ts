import ModelCoreTypes from './ModelCoreTypes'
import ModelEnumerationKeyTypes from './ModelEnumerationKeyTypes'

type ModelEnumerationInterface = {
  type: ModelCoreTypes
  key: ModelEnumerationKeyTypes
  value: string
}

export default ModelEnumerationInterface
