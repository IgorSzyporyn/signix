import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import CanvasGroup from '../CanvasGroup/CanvasGroup'
import CanvasImage from '../CanvasImage/CanvasImage'
import CanvasText from '../CanvasText/CanvasText'
import CanvasBackground from '../CanvasBackground/CanvasBackground'

type CanvasItemProps = {
  model: ModelInterface
}

const getComponent = ({ model, ...props }: CanvasItemProps) => {
  let Component = null

  let canvasProps = {
    ...props,
    className: model.type,
    model
  }

  switch (model.type) {
    case 'background':
      Component = <CanvasBackground {...canvasProps} />
      break
    case 'group':
      Component = <CanvasGroup {...canvasProps} />
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      Component = <CanvasText {...canvasProps} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      Component = <CanvasImage {...canvasProps} />
      break
    default:
      Component = null
      break
  }

  return Component
}

const CanvasItem = (props: CanvasItemProps) => getComponent(props)

export default CanvasItem
