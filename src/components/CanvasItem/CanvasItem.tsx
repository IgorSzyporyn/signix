import { useStore } from 'laco-react'
import React, { CSSProperties } from 'react'
import { useMeasure } from 'react-use'
import withCanvas from '../../hoc/withCanvas'
import AppStore from '../../stores/AppStore'
import AppStoreInterface from '../../types/AppStoreInterface'
import SizeInterface from '../../types/SizeInterface'
import ModelInterface from '../../types/ModelInterface'
import convertBackgroundToCSS from '../../utils/convertBackgroundToCSS'
import convertColorToCSS, { ColorCSSProperties } from '../../utils/convertColorToCSS'
import convertDimensionToCSS, { DimensionCSSProperties } from '../../utils/convertDimensionToCSS'
import convertPositionToCSS, { PositionCSSProperties } from '../../utils/convertPositionToCSS'
import CanvasBackground from '../CanvasBackground/CanvasBackground'
import CanvasGroup from '../CanvasGroup/CanvasGroup'
import CanvasImageOptions from '../CanvasImageOptions/CanvasImageOptions'
import CanvasImageOptionsMultiple from '../CanvasImageOptionsMultiple/CanvasImageOptionsMultiple'
import CanvasImageStatic from '../CanvasImageStatic/CanvasImageStatic'
import CanvasTextDynamic from '../CanvasTextDynamic/CanvasTextDynamic'
import CanvasTextOptions from '../CanvasTextOptions/CanvasTextOptions'
import CanvasTextStatic from '../CanvasTextStatic/CanvasTextStatic'
import Draggable from 'react-draggable'
import getOffsetFromDrag from '../../utils/getOffsetFromDrag'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import convertPositionToTranslate from '../../utils/convertPositionToTranslate'

const createCanvasStyle = (
  { dimension, position, color, background }: ModelInterface,
  container: SizeInterface,
  width: number,
  height: number
) => {
  const style: CanvasCSSProperties = {
    ...convertDimensionToCSS(dimension),
    ...convertPositionToCSS(position, container, { width, height }),
    ...convertColorToCSS(color),
    ...convertBackgroundToCSS(background)
  }

  return style
}

const getComponent = (
  { model, ...props }: CanvasItemProps,
  style: CanvasCSSProperties,
  ref: any,
  container: SizeInterface,
  size: SizeInterface,
  activeModelId?: string
) => {
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
      Component = <CanvasBackground {...canvasProps} forwardedRef={ref} />
      break
    case 'group':
      Component = <CanvasGroup {...canvasProps} forwardedRef={ref} />
      break
    case 'text':
    case 'textstatic':
      Component = <CanvasTextStatic {...canvasProps} forwardedRef={ref} />
      break
    case 'textdynamic':
      Component = <CanvasTextDynamic {...canvasProps} forwardedRef={ref} />
      break
    case 'textoptions':
      Component = <CanvasTextOptions {...canvasProps} forwardedRef={ref} />
      break
    case 'image':
    case 'imagestatic':
      Component = <CanvasImageStatic {...canvasProps} forwardedRef={ref} />
      break
    case 'imageoptions':
      Component = <CanvasImageOptions {...canvasProps} forwardedRef={ref} />
      break
    case 'imageoptionsmultiple':
      Component = <CanvasImageOptionsMultiple {...canvasProps} forwardedRef={ref} />
      break
    default:
      Component = null
      break
  }

  const position = convertPositionToTranslate(model.position, container, {
    width: size.width,
    height: size.height
  })

  return Component ? (
    <Draggable
      disabled={!model.parentId}
      bounds="parent"
      position={position}
      onStop={(e, data) => {
        const offset = getOffsetFromDrag(data, model.position, container, size)
        updateItemInModelStore({ id: model.id, position: { ...model.position, ...offset } })
      }}
    >
      {Component}
    </Draggable>
  ) : null
}

type CanvasCSSProperties = Pick<
  CSSProperties,
  keyof ColorCSSProperties | keyof PositionCSSProperties | keyof DimensionCSSProperties
>

type CanvasItemProps = {
  model: ModelInterface
  container: SizeInterface
  style?: React.CSSProperties
}

const CanvasItem = (props: CanvasItemProps) => {
  const { model, container } = props
  const [ref, { width, height }] = useMeasure()
  const { activeModelId }: AppStoreInterface = useStore(AppStore)

  const style = createCanvasStyle(model, container, width, height)

  return getComponent(props, style, ref, container, { width, height }, activeModelId)
}

export default withCanvas(CanvasItem)
