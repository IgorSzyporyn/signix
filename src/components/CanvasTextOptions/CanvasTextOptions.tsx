import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import convertModelToQueryString from '../../utils/convertModelToQueryString'

const CanvasTextOptions = ({ model, forwardedRef, ...props }: WithCanvasProps) => {
  const { font, color, value } = model
  const textQuery = convertModelToQueryString({ font, color, value })

  // @TODO - Need to make this a div somehow
  // @TODO - Find value from options default
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

export default CanvasTextOptions
