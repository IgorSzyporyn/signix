import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertyFont from './PropertyFont'

export default {
  component: PropertyFont,
  title: 'Components|PropertyFont'
}

export const Default = () => <PropertyFont model={{ ...TextModel }} />
