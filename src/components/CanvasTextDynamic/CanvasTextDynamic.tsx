import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextDynamic = ({ model, forwardedRef, ...props }: WithCanvasProps) => {
  const { font, color, value } = model
  const textQuery = convertModelToQueryString({ font, color, value })

  // @TODO - need to make this a div element somehow!
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

export default CanvasTextDynamic
