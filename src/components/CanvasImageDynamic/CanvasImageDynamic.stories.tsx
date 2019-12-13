import React from 'react'
import '../../baseline.css'
import ImageModel from '../../models/ImageModel'
import CanvasImageDynamic from './CanvasImageDynamic'

export default {
  component: CanvasImageDynamic,
  title: 'Components|CanvasImageDynamic'
}

export const NoValue = () => (
  <CanvasImageDynamic
    model={{
      ...ImageModel
    }}
  />
)

export const SmallSize = () => (
  <CanvasImageDynamic
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
  <CanvasImageDynamic
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
