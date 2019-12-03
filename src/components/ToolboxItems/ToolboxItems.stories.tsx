import React from 'react'
import ToolboxItems from './ToolboxItems'
import '../../baseline.scss'

export default {
  component: ToolboxItems,
  title: 'Components|ToolboxItems'
}

export const asListView = () => <ToolboxItems />

export const asGridView = () => <ToolboxItems view="grid" />
