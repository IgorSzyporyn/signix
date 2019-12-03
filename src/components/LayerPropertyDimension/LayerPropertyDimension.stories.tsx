import React from 'react'
import LayerPropertyDimension from './LayerPropertyDimension'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.scss'

export default {
  component: LayerPropertyDimension,
  title: 'Components|LayerPropertyDimension'
}

export const Default = () => (
  <LayerPropertyDimension model={{ ...BackgroundModel }} />
)
