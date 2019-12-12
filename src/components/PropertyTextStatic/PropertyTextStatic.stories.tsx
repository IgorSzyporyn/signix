import React from 'react'
import '../../baseline.scss'
import TextModel from '../../models/TextModel'
import PropertyTextStatic from './PropertyTextStatic'

export default {
  component: PropertyTextStatic,
  title: 'Components|PropertyTextStatic'
}

export const Default = () => <PropertyTextStatic model={{ ...TextModel }} />
