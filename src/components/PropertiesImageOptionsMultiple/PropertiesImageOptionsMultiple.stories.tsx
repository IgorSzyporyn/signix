import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesImageOptionsMultiple from './PropertiesImageOptionsMultiple'

export default {
  component: PropertiesImageOptionsMultiple,
  title: 'Components|PropertiesImageOptionsMultiple'
}

export const Default = () => <PropertiesImageOptionsMultiple model={{ ...BackgroundModel }} />
