import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import CanvasTextOptions from './CanvasTextOptions'

export default {
  component: CanvasTextOptions,
  title: 'Components|CanvasTextOptions'
}

export const Default = () => (
  <CanvasTextOptions
    model={{ ...TextModel, value: 'Using Default Model values' }}
  />
)

export const WithGreenColor = () => (
  <CanvasTextOptions
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'green' },
      value: 'Using a green foreground value'
    }}
  />
)

export const WithPinkBackgroundAndGreenColorSetToTopRight = () => (
  <CanvasTextOptions
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'yellow', background: 'red' },
      position: { ...TextModel.position, right: 0, type: 'top-right' },
      value: 'Using yellow foreground and red background, set to the right'
    }}
  />
)
