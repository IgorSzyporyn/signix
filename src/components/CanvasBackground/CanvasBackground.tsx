import React from 'react'
import withCanvas, { WithCanvasProps } from '../../hoc/withCanvas'
import CanvasItems from '../CanvasItems/CanvasItems'

const CanvasBackground = ({ style, model, ...props }: WithCanvasProps) => (
  <div style={{ ...style, position: 'relative' }} {...props}>
    {model.items && <CanvasItems model={model} />}
  </div>
)

export default withCanvas(CanvasBackground)
