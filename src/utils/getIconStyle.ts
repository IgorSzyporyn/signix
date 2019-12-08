import { CSSProperties } from 'react'
import SizeTypes from '../types/SizeTypes'
import getIconSize from './getIconSize'

type GetIconSizeProps = {
  size?: SizeTypes
  style?: CSSProperties
}

const getIconStyle = ({ size, style }: GetIconSizeProps) => {
  let iconSize = getIconSize(size || 'normal')
  let iconStyle = style || {}

  return { ...iconStyle, ...iconSize }
}

export default getIconStyle
