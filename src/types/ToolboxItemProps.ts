import ModelTypes from './ModelTypes'
import ViewTypes from './ViewTypes'

type ToolboxItemProps = {
  type: ModelTypes
  view?: ViewTypes
  title?: string
  subtitle?: string
  api?: boolean
}

export default ToolboxItemProps
