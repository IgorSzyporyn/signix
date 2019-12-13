import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextDynamic = ({ model, ...props }: WithCanvasProps) => {
  const modelAsQuery = convertModelToQueryString(model)

  return (
    <img
      onClick={e => {
        e.stopPropagation()
        updateActiveModelInAppStore(model.id)
      }}
      {...props}
      alt={model.value as string}
      src={`http://localhost:8000/render/text.png?model=${modelAsQuery}`}
    />
  )
}

export default CanvasTextDynamic
