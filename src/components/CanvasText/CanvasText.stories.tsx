import React from 'react'
import '../../baseline.scss'
import TextModel from '../../models/TextModel'
import CanvasText from './CanvasText'

export default {
  component: CanvasText,
  title: 'Components|CanvasText'
}

export const Default = () => (
  <CanvasText model={{ ...TextModel, value: 'Using Default Model values' }} />
)

export const WithGreenColor = () => (
  <CanvasText
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'green' },
      value: 'Using a green foreground value'
    }}
  />
)

export const WithPinkBackgroundAndGreenColorSetToTopRight = () => (
  <CanvasText
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'yellow', background: 'red' },
      position: { ...TextModel.position, right: 0, type: 'top-right' },
      value: 'Using yellow foreground and red background, set to the right'
    }}
  />
)
