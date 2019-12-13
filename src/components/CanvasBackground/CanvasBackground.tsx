import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import CanvasItems from '../CanvasItems/CanvasItems'

const CanvasBackground = ({ style, model, ...props }: WithCanvasProps) => {
  return (
    <div style={{ ...style, position: 'relative' }} {...props}>
      <CanvasItems model={model} />
    </div>
  )
}

export default CanvasBackground
