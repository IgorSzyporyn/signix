import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import LayerBackground from '../LayerBackground/LayerBackground'
import LayerPanel from './LayerPanel'

export default {
  component: LayerPanel,
  title: 'Components|LayerPanel'
}

const model = {
  ...BackgroundModel,
  name: 'Background',
  items: [
    { ...TextModel, name: 'Text1' },
    { ...TextModel, name: 'Text2' },
    { ...ImageModel, name: 'Image' }
  ]
}

export const Default = () => (
  <LayerPanel model={model}>
    <LayerBackground model={model} />
  </LayerPanel>
)
