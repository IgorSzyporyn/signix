import { CSSProperties } from 'react'
import ModelBackgroundInterface from '../types/ModelBackgroundInterface'

export type BackgroundCSSProperties = Pick<
  CSSProperties,
  | 'backgroundImage'
  | 'backgroundSize'
  | 'backgroundPosition'
  | 'backgroundRepeat'
>

const convertBackgroundToCSS = (source?: ModelBackgroundInterface) => {
  const style: BackgroundCSSProperties = {}

  if (!source) {
    return style
  }

  const { disabled, image, position } = source

  if (disabled || !image) {
    return style
  }

  let stylePosition = 'center center'

  switch (position) {
    case 'top-left':
      stylePosition = 'top left'
      break
    case 'top-right':
      stylePosition = 'top right'
      break
    case 'bottom-left':
      stylePosition = 'bottom left'
      break
    case 'bottom-right':
      stylePosition = 'bottom right'
      break
    case 'center':
      stylePosition = 'center center'
      break
    default:
      break
  }

  style.backgroundImage = `url(${image})`
  style.backgroundPosition = stylePosition
  style.backgroundSize = 'auto'
  style.backgroundRepeat = 'no-repeat'

  return style
}

export default convertBackgroundToCSS
