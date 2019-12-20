import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesBackground from './PropertiesBackground'

export default {
  component: PropertiesBackground,
  title: 'Components|PropertiesBackground'
}

export const Default = () => <PropertiesBackground model={{ ...BackgroundModel }} />
