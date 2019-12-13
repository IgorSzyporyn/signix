import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import CanvasItems from '../CanvasItems/CanvasItems'

const CanvasGroup = ({ model, ...props }: WithCanvasProps) => {
  return (
    <div {...props}>
      <CanvasItems model={model} />
    </div>
  )
}

export default CanvasGroup
