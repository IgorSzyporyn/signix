import { CSSProperties } from 'react'
import ModelPositionInterface from '../types/ModelPositionInterface'

export type PositionCSSProperties = Pick<
  CSSProperties,
  'bottom' | 'left' | 'right' | 'top' | 'position'
>

const convertPositionToCSS = (source?: ModelPositionInterface) => {
  const position: PositionCSSProperties = {
    position: 'absolute'
  }

  if (!source) {
    return position
  }

  const { type, bottom, left, right, top } = source

  switch (type) {
    case 'bottom-left':
      position.bottom = bottom
      position.left = left
      break
    case 'bottom-right':
      position.bottom = bottom
      position.right = right
      break
    case 'top-right':
      position.top = top
      position.right = right
      break
    case 'top-left':
      position.top = top
      position.left = left
      break
    default:
      break
  }

  return position
}

export default convertPositionToCSS
