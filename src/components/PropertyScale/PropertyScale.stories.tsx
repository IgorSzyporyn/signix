import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertyScale from './PropertyScale'

export default {
  component: PropertyScale,
  title: 'Components|PropertyScale'
}

export const Default = () => <PropertyScale model={{ ...TextModel }} />
