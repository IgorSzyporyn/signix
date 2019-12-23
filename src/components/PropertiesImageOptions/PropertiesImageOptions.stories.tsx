import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesImageOptions from './PropertiesImageOptions'

export default {
  component: PropertiesImageOptions,
  title: 'Components|PropertiesImageOptions'
}

export const Default = () => <PropertiesImageOptions model={{ ...BackgroundModel }} />
