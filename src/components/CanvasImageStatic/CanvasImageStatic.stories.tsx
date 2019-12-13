import React from 'react'
import '../../baseline.css'
import ImageModel from '../../models/ImageModel'
import CanvasImageStatic from './CanvasImageStatic'

export default {
  component: CanvasImageStatic,
  title: 'Components|CanvasImageStatic'
}

export const NoValue = () => (
  <CanvasImageStatic
    model={{
      ...ImageModel
    }}
  />
)

export const SmallSize = () => (
  <CanvasImageStatic
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
  <CanvasImageStatic
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
