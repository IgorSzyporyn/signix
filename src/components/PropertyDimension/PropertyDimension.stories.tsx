import React from 'react'
import PropertyDimension from './PropertyDimension'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.css'

export default {
  component: PropertyDimension,
  title: 'Components|PropertyDimension'
}

export const Default = () => (
  <PropertyDimension model={{ ...BackgroundModel }} />
)
