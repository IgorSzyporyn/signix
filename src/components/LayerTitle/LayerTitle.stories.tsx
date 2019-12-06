import React from 'react'
import LayerTitle from './LayerTitle'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.scss'

export default {
  component: LayerTitle,
  title: 'Components|LayerTitle'
}

export const Default = () => (
  <LayerTitle model={{ ...BackgroundModel, type: 'background' }} />
)
