import React from 'react'
import '../../baseline.scss'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import CanvasItem from './CanvasItem'

export default {
  component: CanvasItem,
  title: 'Components|CanvasItem'
}

export const UsingTextModel = () => (
  <CanvasItem
    model={{
      type: 'text',
      dimension: {
        disabled: false,
        width: 0,
        height: 0
      },
      position: {
        type: 'top-left',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      },
      color: {
        foreground: 'black',
        background: 'transparent'
      },
      rotation: 0,
      value: 'Using text model'
    }}
  />
)

export const UsingImageModel = () => (
  <CanvasItem
    model={{
      type: 'image',
      dimension: {
        disabled: false,
        width: 48,
        height: 48
      },
      position: {
        type: 'top-left',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      },
      color: {
        foreground: 'black',
        background: 'transparent'
      },
      rotation: 0,
      value: '/logo192.png'
    }}
  />
)
