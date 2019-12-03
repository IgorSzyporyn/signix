import React from 'react'
import withCanvas, { WithCanvasProps } from '../../hoc/withCanvas'
import CanvasItems from '../CanvasItems/CanvasItems'

const CanvasGroup = ({ model, ...props }: WithCanvasProps) => (
  <div {...props}>{model.items && <CanvasItems model={model} />}</div>
)

export default withCanvas(CanvasGroup)
