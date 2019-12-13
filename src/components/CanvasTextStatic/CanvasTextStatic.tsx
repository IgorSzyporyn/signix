import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextStatic = ({ model, ...props }: WithCanvasProps) => {
  const modelAsQuery = convertModelToQueryString(model)

  return (
    <img
      onClick={e => {
        e.stopPropagation()
        updateActiveInModelStore(model.id)
      }}
      {...props}
      alt={model.value}
      src={`http://localhost:8000/render/text.png?model=${modelAsQuery}`}
    />
  )
}

export default CanvasTextStatic
