import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesBackground from './PropertiesBackground'

export default {
  component: PropertiesBackground,
  title: 'Components|PropertiesBackground'
}

export const Default = () => (
  <PropertiesBackground model={{ ...BackgroundModel }} />
)
