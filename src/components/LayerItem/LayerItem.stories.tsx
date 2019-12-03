import React from 'react'
import '../../baseline.scss'
import BackgroundModel from '../../models/BackgroundModel'
import GroupModel from '../../models/GroupModel'
import ImageModel from '../../models/ImageModel'
import TextModel from '../../models/TextModel'
import initModel from '../../stores/model/initModel'
import LayerItem from './LayerItem'

export default {
  component: LayerItem,
  title: 'Components|LayerItem'
}

export const UsingBackgroundModel = () => (
  <LayerItem model={initModel({ ...BackgroundModel, name: 'Background' })} />
)

export const UsingBackgroundModelWithItems = () => (
  <LayerItem
    model={initModel({
      ...BackgroundModel,
      name: 'Background',
      items: [
        { ...TextModel, name: 'Text1' },
        { ...TextModel, name: 'Text2' },
        { ...ImageModel, name: 'Image' }
      ]
    })}
  />
)

export const UsingTextModel = () => (
  <LayerItem model={initModel({ ...TextModel, name: 'Text' })} />
)

export const UsingGroupModelWithItems = () => (
  <LayerItem
    model={initModel({
      ...GroupModel,
      name: 'Group',
      items: [
        { ...TextModel, name: 'Text1' },
        { ...TextModel, name: 'Text2' },
        { ...ImageModel, name: 'Image' }
      ]
    })}
  />
)
