import React from 'react'
import '../../baseline.scss'
import ImageModel from '../../models/ImageModel'
import CanvasImage from './CanvasImage'

export default {
  component: CanvasImage,
  title: 'Components|CanvasImage'
}

export const NoValue = () => (
  <CanvasImage
    model={{
      ...ImageModel
    }}
  />
)

export const SmallSize = () => (
  <CanvasImage
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
  <CanvasImage
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
