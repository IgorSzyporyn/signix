import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesImage from './PropertiesImage'

export default {
  component: PropertiesImage,
  title: 'Components|PropertiesImage'
}

export const Default = () => <PropertiesImage model={{ ...BackgroundModel }} />
