import React from 'react'
import ChevronIcon from './ChevronIcon'
import '../../baseline.scss'

export default {
  component: ChevronIcon,
  title: 'Icons|ChevronIcon'
}

export const Default = () => <ChevronIcon />

export const WidthAndHeight64 = () => <ChevronIcon width={64} height={64} />

export const WidthAndHeight2rem = () => (
  <ChevronIcon width="2rem" height="2rem" />
)

export const WidthAndHeight24pxAndBlueFill = () => (
  <ChevronIcon width="64px" height="64px" fill="blue" />
)
