import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertiesTextStaticQuery from './PropertiesTextStaticQuery'

export default {
  component: PropertiesTextStaticQuery,
  title: 'Components|PropertiesTextStaticQuery'
}

export const Default = () => <PropertiesTextStaticQuery model={{ ...TextModel }} />
