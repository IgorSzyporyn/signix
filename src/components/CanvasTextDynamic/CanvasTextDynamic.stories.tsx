import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import CanvasTextDynamic from './CanvasTextDynamic'

export default {
  component: CanvasTextDynamic,
  title: 'Components|CanvasTextDynamic'
}

export const Default = () => (
  <CanvasTextDynamic model={{ ...TextModel, value: 'Using Default Model values' }} />
)

export const WithGreenColor = () => (
  <CanvasTextDynamic
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'green' },
      value: 'Using a green foreground value'
    }}
  />
)

export const WithPinkBackgroundAndGreenColorSetToTopRight = () => (
  <CanvasTextDynamic
    model={{
      ...TextModel,
      color: { ...TextModel.color, foreground: 'yellow', background: 'red' },
      position: { ...TextModel.position, right: 0, type: 'top-right' },
      value: 'Using yellow foreground and red background, set to the right'
    }}
  />
)
