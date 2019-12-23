import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertiesTextOptions from './PropertiesTextOptions'

export default {
  component: PropertiesTextOptions,
  title: 'Components|PropertiesTextOptions'
}

export const Default = () => <PropertiesTextOptions model={{ ...TextModel }} />
