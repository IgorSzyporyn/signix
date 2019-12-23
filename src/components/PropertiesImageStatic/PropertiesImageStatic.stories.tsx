import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertiesImageStatic from './PropertiesImageStatic'

export default {
  component: PropertiesImageStatic,
  title: 'Components|PropertiesImageStatic'
}

export const Default = () => <PropertiesImageStatic model={{ ...BackgroundModel }} />
