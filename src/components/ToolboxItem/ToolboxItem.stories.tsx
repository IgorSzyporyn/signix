import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import '../../baseline.scss'
import SaveIcon from '../../icons/SaveIcon/SaveIcon'
import Models from '../../models/Models'
import ToolboxItem from './ToolboxItem'

export default {
  component: ToolboxItem,
  title: 'Components|ToolboxItem'
}

export const listViewTitleOnly = () => (
  <DndProvider backend={HTML5Backend}>
    <ToolboxItem title="Title" model={{ ...Models.textstatic }} />
  </DndProvider>
)

export const listViewTitleAndSubtitle = () => (
  <DndProvider backend={HTML5Backend}>
    <ToolboxItem
      title="Title"
      subtitle="Here a subtitle"
      model={{ ...Models.textstatic }}
    />
  </DndProvider>
)

export const listViewTitleSubtitleAndIcon = () => (
  <DndProvider backend={HTML5Backend}>
    <ToolboxItem
      view="list"
      IconComponent={SaveIcon}
      title="Title"
      subtitle="Here a subtitle"
      model={{ ...Models.textstatic }}
    />
  </DndProvider>
)

export const gridView = () => (
  <ToolboxItem
    view="grid"
    IconComponent={SaveIcon}
    model={{ ...Models.textstatic }}
  />
)

export const gridViewTitleSubtitleAndIcon = () => (
  <DndProvider backend={HTML5Backend}>
    <ToolboxItem
      view="grid"
      IconComponent={SaveIcon}
      title="Title"
      subtitle="Here a subtitle"
      model={{ ...Models.textstatic }}
    />
  </DndProvider>
)
