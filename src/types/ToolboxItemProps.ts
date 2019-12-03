import React, { SVGProps } from 'react'
import ToolboxViewTypes from './ToolboxViewTypes'
import ModelTypes from './ModelTypes'

type ToolboxItemProps = {
  type: ModelTypes
  view?: ToolboxViewTypes
  title?: string
  subtitle?: string
  IconComponent?: React.ComponentType<SVGProps<SVGSVGElement>>
}

export default ToolboxItemProps
