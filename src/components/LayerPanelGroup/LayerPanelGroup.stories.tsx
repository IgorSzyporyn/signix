import React from 'react'
import '../../baseline.scss'
import GroupModel from '../../models/GroupModel'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import LayerPanelGroup from './LayerPanelGroup'

export default {
  component: LayerPanelGroup,
  title: 'Components|LayerPanelGroup'
}

export const Default = () => (
  <LayerPanelGroup
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
