import React from 'react'
import '../../baseline.scss'
import GroupModel from '../../models/GroupModel'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import LayerPanelItems from './LayerPanelItems'

export default {
  component: LayerPanelItems,
  title: 'Components|LayerPanelItems'
}

export const Default = () => (
  <LayerPanelItems
    model={{
      ...GroupModel,
      name: 'Group',
      items: [
        { ...TextModel, name: 'Text1' },
        { ...TextModel, name: 'Text2' },
        { ...ImageModel, name: 'Image' }
      ]
    }}
  />
)
