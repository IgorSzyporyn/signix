import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextStatic = ({ model, forwardedRef, ...props }: WithCanvasProps) => {
  const { font, color, value } = model
  const textQuery = convertModelToQueryString({ font, color, value })

  // @TODO - Need to make this a div somehow
  return (
    <div
      ref={forwardedRef}
      onClick={e => {
        e.stopPropagation()
        updateActiveModelInAppStore(model.id)
      }}
      {...props}
    />
  )
}

export default CanvasTextStatic
