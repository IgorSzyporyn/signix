import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesText from './PropertiesText'

export default {
  component: PropertiesText,
  title: 'Components|PropertiesText'
}

export const Default = () => <PropertiesText model={{ ...BackgroundModel }} />
