import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'

const CanvasText = ({ model, ...props }: WithCanvasProps) => {
  return <div {...props}>{model.value}</div>
}

export default CanvasText
