import React from 'react'
import LayerProps from '../../types/LayerProps'
import LayerBackground from '../LayerBackground/LayerBackground'
import LayerGroup from '../LayerGroup/LayerGroup'
import LayerImage from '../LayerImage/LayerImage'
import LayerPanel from '../LayerPanel/LayerPanel'
import LayerText from '../LayerText/LayerText'

const getComponent = (props: LayerProps) => {
  const { model } = props
  let Component = null

  switch (model.type) {
    case 'background':
      Component = <LayerBackground {...props} />
      break
    case 'group':
      Component = <LayerGroup {...props} />
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      Component = <LayerText {...props} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      Component = <LayerImage {...props} />
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
