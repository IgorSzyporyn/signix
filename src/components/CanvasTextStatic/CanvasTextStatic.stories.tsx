import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import CanvasTextStatic from './CanvasTextStatic'

export default {
  component: CanvasTextStatic,
  title: 'Components|CanvasTextStatic'
}

export const Default = () => (
  <CanvasTextStatic model={{ ...TextModel, value: 'Using Default Model values' }} />
)

export const WithGreenColor = () => (
  <CanvasTextStatic
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'green' },
      value: 'Using a green foreground value'
    }}
  />
)

export const WithPinkBackgroundAndGreenColorSetToTopRight = () => (
  <CanvasTextStatic
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'yellow', background: 'red' },
      position: { ...TextModel.position, right: 0, type: 'top-right' },
      value: 'Using yellow foreground and red background, set to the right'
    }}
  />
)
