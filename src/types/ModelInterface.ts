import ModelBackgroundInterface from './ModelBackgroundInterface'
import ModelColorInterface from './ModelColorInterface'
import ModelDimensionInterface from './ModelDimensionInterface'
import ModelInterfacePartial from './ModelInterfacePartial'
import ModelOptionsInterface from './ModelOptionsInterface'
import ModelPositionInterface from './ModelPositionInterface'
import ModelTypes from './ModelTypes'

type ModelInterface = {
  group?: boolean
  id?: string
  level?: number
  name?: string
  options?: ModelOptionsInterface[]
  parentId?: string
  value?: string[] | string
  background: ModelBackgroundInterface
  color: ModelColorInterface
  dimension: ModelDimensionInterface
  items: ModelInterfacePartial[]
  position: ModelPositionInterface
  type: ModelTypes
}

export default ModelInterface
