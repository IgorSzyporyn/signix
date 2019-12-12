import React from 'react'
import '../../baseline.scss'
import TextModel from '../../models/TextModel'
import PropertiesTextStatic from './PropertiesTextStatic'

export default {
  component: PropertiesTextStatic,
  title: 'Components|PropertiesTextStatic'
}

export const Default = () => <PropertiesTextStatic model={{ ...TextModel }} />
