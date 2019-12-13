import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesItem from './PropertiesItem'

export default {
  component: PropertiesItem,
  title: 'Components|PropertiesItem'
}

export const Default = () => <PropertiesItem model={{ ...BackgroundModel }} />
