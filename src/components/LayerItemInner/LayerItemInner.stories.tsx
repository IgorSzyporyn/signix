import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import LayerItemInner from './LayerItemInner'

export default {
  component: LayerItemInner,
  title: 'Components|LayerItemInner'
}

export const Default = () => <LayerItemInner model={{ ...BackgroundModel }} />
