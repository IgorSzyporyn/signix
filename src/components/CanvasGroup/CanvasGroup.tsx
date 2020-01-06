import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import CanvasItems from '../CanvasItems/CanvasItems'

const CanvasGroup = ({ model, forwardedRef, ...props }: WithCanvasProps) => {
  return (
    <div ref={forwardedRef} {...props}>
      <CanvasItems model={model} />
    </div>
  )
}

export default CanvasGroup
