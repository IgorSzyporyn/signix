import React from 'react'
import LayerPropertyColor from './LayerPropertyColor'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.scss'

export default {
  component: LayerPropertyColor,
  title: 'Components|LayerPropertyColor'
}

export const Default = () => (
  <LayerPropertyColor model={{ ...BackgroundModel }} />
)
