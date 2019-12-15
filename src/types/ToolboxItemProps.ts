import ModelTypes from './ModelTypes'
import ToolboxViewTypes from './ToolboxViewTypes'

type ToolboxItemProps = {
  type: ModelTypes
  view?: ToolboxViewTypes
  title?: string
  subtitle?: string
  api?: boolean
}

export default ToolboxItemProps
