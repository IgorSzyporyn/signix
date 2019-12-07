import Folder from '@material-ui/icons/Folder'
import FolderOutlined from '@material-ui/icons/FolderOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import React from 'react'
import ModelTypes from '../../types/ModelTypes'

const getLayerIcon = ({
  isActive,
  hasItems,
  isExpanded,
  isGroup,
  type,
  ...props
}: LayerIconProps) => {
  let Component = null

  const iconProps = {
    ...props
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
        iconProps.style.fill = 'var(--color-lightorange)'
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

type LayerIconProps = {
  type: ModelTypes
  hasItems: boolean
  isActive: boolean
  isExpanded: boolean
  isGroup?: boolean
  style: React.CSSProperties
}

const LayerIcon = (props: LayerIconProps) => {
  const layerIcon = getLayerIcon(props)

  return <>{layerIcon}</>
}

export default LayerIcon
