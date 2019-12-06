import ModelTypes from './ModelTypes'
import ModelPositionInterface from './ModelPositionInterface'
import ModelDimensionInterface from './ModelDimensionInterface'
import ModelColorInterface from './ModelColorInterface'
import ModelInterfacePartial from './ModelInterfacePartial'

type ModelInterface = {
  id?: string
  parentId?: string
  name?: string
  level?: number
  group?: boolean
  items: ModelInterfacePartial[]
  type: ModelTypes
  color: ModelColorInterface
  dimension: ModelDimensionInterface
  position: ModelPositionInterface
  value: string[] | string
}

export default ModelInterface
