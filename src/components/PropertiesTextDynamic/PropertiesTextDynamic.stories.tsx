import React from 'react'
import '../../baseline.scss'
import TextModel from '../../models/TextModel'
import PropertiesTextDynamic from './PropertiesTextDynamic'

export default {
  component: PropertiesTextDynamic,
  title: 'Components|PropertiesTextDynamic'
}

export const Default = () => <PropertiesTextDynamic model={{ ...TextModel }} />
