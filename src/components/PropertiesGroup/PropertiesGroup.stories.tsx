import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesGroup from './PropertiesGroup'

export default {
  component: PropertiesGroup,
  title: 'Components|PropertiesGroup'
}

export const Default = () => <PropertiesGroup model={{ ...BackgroundModel }} />
