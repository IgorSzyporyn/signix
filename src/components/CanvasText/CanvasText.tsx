import React from 'react'
import withCanvas, { WithCanvasProps } from '../../hoc/withCanvas'

const CanvasText = ({ model, ...props }: WithCanvasProps) => (
  <div {...props}>{model.value}</div>
)

export default withCanvas(CanvasText)
