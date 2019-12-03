import React from 'react'
import LayerProps from '../../types/LayerProps'
import LayerPanel from '../LayerPanel/LayerPanel'
import LayerPropertiesBackground from '../LayerPropertiesBackground/LayerPropertiesBackground'
import LayerPropertiesGroup from '../LayerPropertiesGroup/LayerPropertiesGroup'
import LayerPropertiesImage from '../LayerPropertiesImage/LayerPropertiesImage'
import LayerPropertiesText from '../LayerPropertiesText/LayerPropertiesText'

const getComponent = (props: LayerProps) => {
  const { model } = props
  let Component = null

  switch (model.type) {
    case 'background':
      Component = <LayerPropertiesBackground {...props} />
      break
    case 'group':
      Component = <LayerPropertiesGroup {...props} />
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      Component = <LayerPropertiesText {...props} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      Component = <LayerPropertiesImage {...props} />
      break
    default:
      Component = null
      break
  }

  return Component
}

const LayerItem = (props: LayerProps) => {
  return <LayerPanel {...props}>{getComponent(props)}</LayerPanel>
}

export default LayerItem
