import React, { CSSProperties, MouseEvent } from 'react'
import styled from 'styled-components'
import updateActiveInModelStore from '../stores/model/updateActiveInModelStore'
import ModelInterface from '../types/ModelInterface'
import convertBackgroundToCSS from '../utils/convertBackgroundToCSS'
import convertColorToCSS, {
  ColorCSSProperties
} from '../utils/convertColorToCSS'
import convertDimensionToCSS, {
  DimensionCSSProperties
} from '../utils/convertDimensionToCSS'
import convertPositionToCSS, {
  PositionCSSProperties
} from '../utils/convertPositionToCSS'
import updateActionInSettingsStore from '../stores/settings/updateActionInSettingsStore'

type CanvasCSSProperties = Pick<
  CSSProperties,
  | keyof ColorCSSProperties
  | keyof PositionCSSProperties
  | keyof DimensionCSSProperties
>

const createCanvasStyle = ({
  dimension,
  position,
  color,
  background
}: ModelInterface) => {
  const style: CanvasCSSProperties = {
    ...convertDimensionToCSS(dimension),
    ...convertPositionToCSS(position),
    ...convertColorToCSS(color),
    ...convertBackgroundToCSS(background)
  }

  return style
}

export interface WithCanvasProps {
  model: ModelInterface
  style?: CanvasCSSProperties
  className?: string
}

const withCanvas = <P extends object>(Component: React.ComponentType<P>) =>
  class WithCanvasHOC extends React.Component<P & WithCanvasProps> {
    render() {
      const { model, ...rest } = this.props
      const style = createCanvasStyle(model)

      return (
        <Component
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            updateActiveInModelStore(model.id)
          }}
          onDoubleClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            updateActionInSettingsStore({ active: 1 })
          }}
          hidden={model.hidden}
          style={style}
          model={model}
          {...(rest as P)}
        />
      )
    }
  }

export default withCanvas
