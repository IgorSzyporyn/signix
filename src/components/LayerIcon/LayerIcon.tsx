import FolderOutlined from '@material-ui/icons/FolderOutlined'
import Folder from '@material-ui/icons/Folder'
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import React from 'react'
import ModelTypes from '../../types/ModelTypes'

const getLayerIcon = ({
  isActive,
  hasItems,
  type,
  ...props
}: LayerIconProps) => {
  let Component = null

  const iconProps = {
    ...props
  }

  switch (type) {
    case 'background':
      Component = null
      break
    case 'group':
      if (hasItems) {
        Component = <Folder {...iconProps} />
      } else {
        Component = <FolderOutlined {...iconProps} />
      }
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      Component = <TextFieldsOutlinedIcon {...iconProps} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
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
}

const LayerIcon = (props: LayerIconProps) => {
  const layerIcon = getLayerIcon(props)

  return <>{layerIcon}</>
}

export default LayerIcon
