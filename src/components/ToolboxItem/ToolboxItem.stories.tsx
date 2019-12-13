import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import '../../baseline.css'
import ToolboxItem from './ToolboxItem'

export default {
  component: ToolboxItem,
  title: 'Components|ToolboxItem'
}

export const listViewTitleOnly = () => (
  <DndProvider backend={HTML5Backend}>
    <ToolboxItem view="list" title="Background" type="background" />
  </DndProvider>
)

export const listViewTitleAndSubtitle = () => (
  <DndProvider backend={HTML5Backend}>
    <ToolboxItem
      view="list"
      title="Background"
      type="background"
      subtitle="Here a subtitle for background"
    />
  </DndProvider>
)
