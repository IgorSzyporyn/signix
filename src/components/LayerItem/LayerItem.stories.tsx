import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import GroupModel from '../../models/GroupModel'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import LayerItem from './LayerItem'

export default {
  component: LayerItem,
  title: 'Components|LayerItem'
}

export const WithBackgroundModel = () => (
  <LayerItem model={{ ...BackgroundModel, name: 'Background' }} />
)

export const WithTextModel = () => (
  <LayerItem model={{ ...TextModel, name: 'Text' }} />
)

export const WithGroupModel = () => (
  <LayerItem
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
