import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesGroup from './PropertiesGroup'

export default {
  component: PropertiesGroup,
  title: 'Components|PropertiesGroup'
}

export const Default = () => <PropertiesGroup model={{ ...BackgroundModel }} />
