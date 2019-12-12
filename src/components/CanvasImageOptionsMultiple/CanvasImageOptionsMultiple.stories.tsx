import React from 'react'
import '../../baseline.scss'
import ImageModel from '../../models/ImageModel'
import CanvasImageOptionsMultiple from './CanvasImageOptionsMultiple'

export default {
  component: CanvasImageOptionsMultiple,
  title: 'Components|CanvasImageOptionsMultiple'
}

export const NoValue = () => (
  <CanvasImageOptionsMultiple
    model={{
      ...ImageModel
    }}
  />
)

export const SmallSize = () => (
  <CanvasImageOptionsMultiple
    model={{
      ...ImageModel,
      dimension: {
        ...ImageModel.dimension,
        width: 16,
        height: 16
      },
      value: '/logo192.png'
    }}
  />
)

export const LargeSizeWithBackground = () => (
  <CanvasImageOptionsMultiple
    model={{
      ...ImageModel,
      dimension: {
        ...ImageModel.dimension,
        width: 164,
        height: 164
      },
      color: {
        ...ImageModel.color,
        background: 'black'
      },
      value: '/logo192.png'
    }}
  />
)
