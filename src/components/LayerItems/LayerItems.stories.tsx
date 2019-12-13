import React from 'react'
import '../../baseline.css'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import LayerItems from './LayerItems'

export default {
  component: LayerItems,
  title: 'Components|LayerItems'
}

export const Default = () => (
  <LayerItems
    items={[
      { ...TextModel, name: 'Text1' },
      { ...TextModel, name: 'Text2' },
      { ...ImageModel, name: 'Image' }
    ]}
  />
)
