import ModelTypes from './ModelTypes'
import ModelPositionInterface from './ModelPositionInterface'
import ModelDimensionInterface from './ModelDimensionInterface'
import ModelColorInterface from './ModelColorInterface'
import ModelSettingsInterface from './ModelSettingsInterface'

type ModelInterface = {
  color?: ModelColorInterface
  dimension?: ModelDimensionInterface
  id?: string
  items?: ModelInterface[]
  name?: string
  position?: ModelPositionInterface
  rotation?: number
  type?: ModelTypes
  value?: string[] | string
  parentId?: string
  settings?: ModelSettingsInterface
}

export default ModelInterface
