import Folder from '@material-ui/icons/Folder'
import FolderOutlined from '@material-ui/icons/FolderOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import React from 'react'
import ModelTypes from '../../types/ModelTypes'
import SizeTypes from '../../types/SizeTypes'
import MUIcon from '../MUIcon/MUIcon'

type GetModelTypeIconSettings = {
  type: ModelTypes
  hasItems?: boolean
  isExpanded?: boolean
}

const getModelTypeIcon = (
  props: { size?: SizeTypes; style?: React.CSSProperties },
  settings: GetModelTypeIconSettings
) => {
  const { type, isExpanded, hasItems } = settings
  let Component = null

  const iconProps = {
    ...props,
    style: props.style || {}
  }

  switch (type) {
    case 'background':
      Component = <GridOnOutlinedIcon {...iconProps} />
      break
    case 'group':
      iconProps.style.fill = 'var(--color-orange)'

      if (isExpanded) {
        Component = <FolderOpenOutlinedIcon {...iconProps} />
      } else if (hasItems) {
        Component = <Folder {...iconProps} />
      } else {
        iconProps.style.fill = 'var(--color-lightest)'
        Component = <FolderOutlined {...iconProps} />
      }
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      iconProps.style.fill = 'var(--color-purple)'
      Component = <TextFieldsOutlinedIcon {...iconProps} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      iconProps.style.fill = 'var(--color-red)'
      Component = <ImageOutlinedIcon {...iconProps} />
      break
    default:
      Component = null
      break
  }

  return Component
}

type ModelTypeIconProps = {
  type: ModelTypes
  hasItems?: boolean
  isActive?: boolean
  isExpanded?: boolean
  size?: SizeTypes
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent) => void
}

const ModelTypeIcon = ({
  type,
  hasItems,
  isActive,
  isExpanded,
  onClick,
  ...props
}: ModelTypeIconProps) => {
  return (
    <MUIcon
      {...props}
      onClick={onClick}
      render={p => getModelTypeIcon(p, { type, hasItems, isExpanded })}
    />
  )
}

export default ModelTypeIcon
