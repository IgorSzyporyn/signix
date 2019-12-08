import React from 'react'
import PropertyDimension from './PropertyDimension'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.scss'

export default {
  component: PropertyDimension,
  title: 'Components|PropertyDimension'
}

export const Default = () => (
  <PropertyDimension model={{ ...BackgroundModel }} />
)
