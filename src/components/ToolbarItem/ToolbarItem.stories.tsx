import React from 'react'
import { action } from '@storybook/addon-actions'
import ToolbarItem from './ToolbarItem'
import SaveIcon from '../../icons/SaveIcon/SaveIcon'
import OpenIcon from '../../icons/OpenIcon/OpenIcon'
import '../../baseline.scss'

export default {
  component: ToolbarItem,
  title: 'Components|ToolbarItem'
}

export const noIcon = () => (
  <ToolbarItem onInteract={action('clicked')} text="No Icon" />
)

export const withSaveIcon = () => (
  <ToolbarItem onInteract={action('clicked')} text="Save">
    <SaveIcon />
  </ToolbarItem>
)

export const withOpenIcon = () => (
  <ToolbarItem onInteract={action('clicked')} text="Open">
    <OpenIcon />
  </ToolbarItem>
)
