import React from 'react'
import '../../baseline.css'
import TextStaticModel from '../../models/TextStaticModel'
import CanvasItem from './CanvasItem'

export default {
  component: CanvasItem,
  title: 'Components|CanvasItem'
}

export const UsingTextModel = () => (
  <CanvasItem model={{ ...TextStaticModel, value: 'Some Text here' }} />
)
