import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import '../../baseline.css'
import Toolbox from './Toolbox'

export default {
  component: Toolbox,
  title: 'Components|Toolbox'
}

export const Default = () => (
  <DndProvider backend={HTML5Backend}>
    <Toolbox />
  </DndProvider>
)

export const ListView = () => (
  <DndProvider backend={HTML5Backend}>
    <Toolbox view="list" />
  </DndProvider>
)

export const GridView = () => (
  <DndProvider backend={HTML5Backend}>
    <Toolbox view="grid" />
  </DndProvider>
)
