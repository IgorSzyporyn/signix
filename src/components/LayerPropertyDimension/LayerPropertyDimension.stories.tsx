import React from 'react'
import LayerPropertyDimension from './LayerPropertyDimension'
import '../../baseline.scss'

export default {
  component: LayerPropertyDimension,
  title: 'Components|LayerPropertyDimension'
}

export const Default = () => (
  <LayerPropertyDimension
    dimension={{ disabled: false, width: 0, height: 0 }}
    id="test"
  />
)
