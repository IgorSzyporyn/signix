import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import CanvasBackground from './CanvasBackground'

export default {
  component: CanvasBackground,
  title: 'Components|CanvasBackground'
}

export const Default = () => (
  <CanvasBackground
    model={{
      ...BackgroundModel
    }}
  />
)

export const WithColorAndSize = () => (
  <CanvasBackground
    model={{
      ...BackgroundModel,
      color: {
        ...BackgroundModel.color,
        background: 'green'
      },
      dimension: {
        ...BackgroundModel.dimension,
        width: 480,
        height: 220
      }
    }}
  />
)
