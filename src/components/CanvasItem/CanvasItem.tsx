import { useStore } from 'laco-react'
import React from 'react'
import withCanvas from '../../hoc/withCanvas'
import AppStore from '../../stores/AppStore'
import AppStoreInterface from '../../types/AppStoreInterface'
import ModelInterface from '../../types/ModelInterface'
import CanvasBackground from '../CanvasBackground/CanvasBackground'
import CanvasGroup from '../CanvasGroup/CanvasGroup'
import CanvasImageDynamic from '../CanvasImageDynamic/CanvasImageDynamic'
import CanvasImageOptions from '../CanvasImageOptions/CanvasImageOptions'
import CanvasImageOptionsMultiple from '../CanvasImageOptionsMultiple/CanvasImageOptionsMultiple'
import CanvasImageStatic from '../CanvasImageStatic/CanvasImageStatic'
import CanvasTextDynamic from '../CanvasTextDynamic/CanvasTextDynamic'
import CanvasTextOptions from '../CanvasTextOptions/CanvasTextOptions'
import CanvasTextStatic from '../CanvasTextStatic/CanvasTextStatic'

type CanvasItemProps = {
  model: ModelInterface
  style?: React.CSSProperties
}

const getComponent = ({ model, style, ...props }: CanvasItemProps, activeModelId?: string) => {
  let Component = null
  const canvasStyle: React.CSSProperties = {}

  if (activeModelId === model.id) {
    canvasStyle.outline = '0.1rem solid var(--color-lightblue)'
  }

  let canvasProps = {
    ...props,
    model,
    style: { ...(style || {}), ...canvasStyle }
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
      Component = <CanvasTextStatic {...canvasProps} />
      break
    case 'textdynamic':
      Component = <CanvasTextDynamic {...canvasProps} />
      break
    case 'textoptions':
      Component = <CanvasTextOptions {...canvasProps} />
      break
    case 'image':
    case 'imagestatic':
      Component = <CanvasImageStatic {...canvasProps} />
      break
    case 'imagedynamic':
      Component = <CanvasImageDynamic {...canvasProps} />
      break
    case 'imageoptions':
      Component = <CanvasImageOptions {...canvasProps} />
      break
    case 'imageoptionsmultiple':
      Component = <CanvasImageOptionsMultiple {...canvasProps} />
      break
    default:
      Component = null
      break
  }

  return Component
}

const CanvasItem = (props: CanvasItemProps) => {
  const { activeModelId }: AppStoreInterface = useStore(AppStore)

  return getComponent(props, activeModelId)
}

export default withCanvas(CanvasItem)
