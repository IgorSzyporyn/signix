import ModelBackgroundInterface from './ModelBackgroundInterface'
import ModelColorInterface from './ModelColorInterface'
import ModelDimensionInterface from './ModelDimensionInterface'
import ModelEnumerationInterface from './ModelEnumerationInterface'
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
  options?: ModelOptionsInterface[]
  parentId?: string
  value?: string
  hidden?: boolean
  unique?: boolean
  font: ModelFontInterface
  background: ModelBackgroundInterface
  color: ModelColorInterface
  dimension: ModelDimensionInterface
  items: ModelInterfacePartial[]
  enumeration: ModelEnumerationInterface[]
  position: ModelPositionInterface
  type: ModelTypes
}

export default ModelInterface
