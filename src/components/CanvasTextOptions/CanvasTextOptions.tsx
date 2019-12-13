import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextOptions = ({ model, ...props }: WithCanvasProps) => {
  const { font, color, value } = model
  const textQuery = convertModelToQueryString({ font, color, value })

  return (
    <img
      onClick={e => {
        e.stopPropagation()
        updateActiveModelInAppStore(model.id)
      }}
      {...props}
      alt={model.value}
      src={`http://localhost:8000/render/text.png?model=${textQuery}`}
    />
  )
}

export default CanvasTextOptions
