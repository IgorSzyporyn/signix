import React from 'react'
import LayerPropertyPosition from './LayerPropertyPosition'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.scss'

export default {
  component: LayerPropertyPosition,
  title: 'Components|LayerPropertyPosition'
}

export const Default = () => (
  <LayerPropertyPosition model={{ ...BackgroundModel }} />
)
