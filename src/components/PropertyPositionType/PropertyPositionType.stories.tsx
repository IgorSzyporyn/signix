import React from 'react'
import PropertyPositionType from './PropertyPositionType'
import '../../baseline.scss'

export default {
  component: PropertyPositionType,
  title: 'Components|PropertyPositionType'
}

export const Default = () => (
  <PropertyPositionType type="top-left" onChange={() => {}} />
)
