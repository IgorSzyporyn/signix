import React from 'react'
import '../../baseline.css'
import TextModel from '../../models/TextModel'
import PropertyImageStatic from './PropertyImageStatic'

export default {
  component: PropertyImageStatic,
  title: 'Components|PropertyImageStatic'
}

export const Default = () => <PropertyImageStatic model={{ ...TextModel }} />
