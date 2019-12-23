import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import Folder from '@material-ui/icons/Folder'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import FolderOutlined from '@material-ui/icons/FolderOutlined'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined'
import ListIcon from '@material-ui/icons/List'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined'
import TextFormatIcon from '@material-ui/icons/TextFormat'
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
      iconProps.style.fill = 'var(--color-piper)'
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
      iconProps.style.fill = 'var(--color-purple)'
      Component = <TextFieldsOutlinedIcon {...iconProps} />
      break
    case 'textdynamic':
      iconProps.style.fill = 'var(--color-purple)'
      Component = <TextFormatIcon {...iconProps} />
      break
    case 'textoptions':
      iconProps.style.fill = 'var(--color-purple)'
      Component = <ListIcon {...iconProps} />
      break
    case 'image':
    case 'imagestatic':
      iconProps.style.fill = 'var(--color-persianred)'
      Component = <CropOriginalIcon {...iconProps} />
      break
    case 'imageoptions':
      iconProps.style.fill = 'var(--color-persianred)'
      Component = <AddPhotoAlternateIcon {...iconProps} />
      break
    case 'imageoptionsmultiple':
      iconProps.style.fill = 'var(--color-persianred)'
      Component = <PhotoLibraryIcon {...iconProps} />
      break
    case 'textstaticquery':
      iconProps.style.fill = 'var(--color-lightorange)'
      Component = <TextFieldsOutlinedIcon {...iconProps} />
      break
    case 'imagestaticquery':
      iconProps.style.fill = 'var(--color-lightorange)'
      Component = <CropOriginalIcon {...iconProps} />
      break
    case 'imageoptionsmultiplequery':
      iconProps.style.fill = 'var(--color-lightorange)'
      Component = <PhotoLibraryIcon {...iconProps} />
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
