import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertyTextDynamic from './PropertyTextDynamic'

export default {
  component: PropertyTextDynamic,
  title: 'Components|PropertyTextDynamic'
}

export const Default = () => <PropertyTextDynamic model={{ ...TextModel }} />
