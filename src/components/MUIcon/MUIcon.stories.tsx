import ImageIcon from '@material-ui/icons/Image'
import React from 'react'
import '../../baseline.css'
import MUIcon from './MUIcon'

export default {
  component: MUIcon,
  title: 'Components|MUIcon'
}

export const Default = () => <MUIcon render={p => <ImageIcon {...p} />} />
