import React from 'react'
import PropertyPosition from './PropertyPosition'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.css'

export default {
  component: PropertyPosition,
  title: 'Components|PropertyPosition'
}

export const Default = () => <PropertyPosition model={{ ...BackgroundModel }} />
