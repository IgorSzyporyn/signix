import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import CanvasGroup from '../CanvasGroup/CanvasGroup'
import CanvasImage from '../CanvasImage/CanvasImage'
import CanvasText from '../CanvasText/CanvasText'
import CanvasBackground from '../CanvasBackground/CanvasBackground'
import withCanvas from '../../hoc/withCanvas'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import { useStore } from 'laco-react'
import './CanvasItem.scss'

type CanvasItemProps = {
  model: ModelInterface
}

const getComponent = (
  { model, ...props }: CanvasItemProps,
  active?: string
) => {
  let Component = null

  let canvasProps = {
    ...props,
    className: `canvas-item-${model.type}`,
    model
  }

  if (active === model.id) {
    canvasProps.className += ` canvas-item-active`
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

const CanvasItem = (props: CanvasItemProps) => {
  const { active }: ModelStoreInterface = useStore(ModelStore)

  return getComponent(props, active)
}

export default withCanvas(CanvasItem)
