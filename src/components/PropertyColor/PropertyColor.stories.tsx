import React from 'react'
import '../../baseline.css'
import BackgroundModel from '../../models/BackgroundModel'
import PropertyColor from './PropertyColor'

export default {
  component: PropertyColor,
  title: 'Components|PropertyColor'
}

export const Default = () => <PropertyColor model={{ ...BackgroundModel }} />
