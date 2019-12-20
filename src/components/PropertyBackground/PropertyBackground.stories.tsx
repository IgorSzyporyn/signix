import React from 'react'
import PropertyBackground from './PropertyBackground'
import BackgroundModel from '../../models/BackgroundModel'
import '../../baseline.css'

export default {
  component: PropertyBackground,
  title: 'Components|PropertyBackground'
}

export const Default = () => <PropertyBackground model={{ ...BackgroundModel }} />
