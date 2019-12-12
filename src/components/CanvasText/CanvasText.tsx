import React from 'react'
import withCanvas, { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'

const CanvasText = ({ model, ...props }: WithCanvasProps) => {
  return (
    <div
      onClick={e => {
        e.stopPropagation()
        updateActiveInModelStore(model.id)
      }}
      {...props}
    >
      {model.value}
    </div>
  )
}

export default withCanvas(CanvasText)
