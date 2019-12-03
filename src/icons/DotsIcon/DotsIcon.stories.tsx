import React from 'react'
import DotsIcon from './DotsIcon'
import '../../baseline.scss'

export default {
  component: DotsIcon,
  title: 'Icons|DotsIcon'
}

export const Default = () => <DotsIcon />

export const WidthAndHeight64 = () => <DotsIcon width={64} height={64} />

export const WidthAndHeight2rem = () => <DotsIcon width="2rem" height="2rem" />

export const WidthAndHeight24pxAndBlueFill = () => (
  <DotsIcon width="64px" height="64px" fill="blue" />
)
