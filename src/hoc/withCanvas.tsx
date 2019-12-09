import React, { CSSProperties } from 'react'
import ModelInterface from '../types/ModelInterface'
import convertColorToCSS, {
  ColorCSSProperties
} from '../utils/convertColorToCSS'
import convertDimensionToCSS, {
  DimensionCSSProperties
} from '../utils/convertDimensionToCSS'
import convertPositionToCSS, {
  PositionCSSProperties
} from '../utils/convertPositionToCSS'
import convertBackgroundToCSS from '../utils/convertBackgroundToCSS'

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

      return <Component style={style} model={model} {...(rest as P)} />
    }
  }

export default withCanvas
