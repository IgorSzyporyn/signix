import React from 'react'
import LayerPropertyColor from './LayerPropertyColor'
import '../../baseline.scss'

export default {
  component: LayerPropertyColor,
  title: 'Components|LayerPropertyColor'
}

export const Default = () => (
  <LayerPropertyColor color={{ foreground: 'white', background: 'black' }} />
)
