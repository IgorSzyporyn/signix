import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextStatic = ({ model, ...props }: WithCanvasProps) => {
  const modelAsQuery = convertModelToQueryString(model)

  return (
    <img
      onClick={e => {
        e.stopPropagation()
        updateActiveModelInAppStore(model.id)
      }}
      {...props}
      alt={model.value}
      src={`http://localhost:8000/render/text.png?model=${modelAsQuery}`}
    />
  )
}

export default CanvasTextStatic
