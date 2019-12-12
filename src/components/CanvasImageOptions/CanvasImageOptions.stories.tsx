import React from 'react'
import '../../baseline.scss'
import ImageModel from '../../models/ImageModel'
import CanvasImageOptions from './CanvasImageOptions'

export default {
  component: CanvasImageOptions,
  title: 'Components|CanvasImageOptions'
}

export const NoValue = () => (
  <CanvasImageOptions
    model={{
      ...ImageModel
    }}
  />
)

export const SmallSize = () => (
  <CanvasImageOptions
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
  <CanvasImageOptions
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
