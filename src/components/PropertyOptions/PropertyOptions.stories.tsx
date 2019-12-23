import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertyOptions from './PropertyOptions'

export default {
  component: PropertyOptions,
  title: 'Components|PropertyOptions'
}

export const Default = () => <PropertyOptions model={{ ...TextModel }} />
