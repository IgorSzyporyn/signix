import ModelBackgroundInterface from './ModelBackgroundInterface'
import ModelColorInterface from './ModelColorInterface'
import ModelCoreTypes from './ModelCoreTypes'
import ModelDimensionInterface from './ModelDimensionInterface'
import ApiEnumerationInterface from './ApiEnumerationInterface'
import ModelFontInterface from './ModelFontInterface'
import ModelInterfacePartial from './ModelInterfacePartial'
import ModelOptionsInterface from './ModelOptionsInterface'
import ModelPositionInterface from './ModelPositionInterface'
import ModelTypes from './ModelTypes'

type ModelInterface = {
  api?: boolean
  group?: boolean
  id?: string
  level?: number
  name?: string
  parentId?: string
  scale?: number
  value?: string
  hidden?: boolean
  disabled?: boolean
  unique?: boolean
  coreType?: ModelCoreTypes
  font: ModelFontInterface
  background: ModelBackgroundInterface
  options: ModelOptionsInterface[]
  color: ModelColorInterface
  dimension: ModelDimensionInterface
  items: ModelInterfacePartial[]
  enumeration: ApiEnumerationInterface[]
  position: ModelPositionInterface
  type: ModelTypes
}

export default ModelInterface
