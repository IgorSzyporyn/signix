import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertyApiKey from './PropertyApiKey'

export default {
  component: PropertyApiKey,
  title: 'Components|PropertyApiKey'
}

export const Default = () => <PropertyApiKey model={{ ...TextModel }} />
