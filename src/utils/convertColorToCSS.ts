import { CSSProperties } from 'react'
import ModelColorInterface from '../types/ModelColorInterface'

export type ColorCSSProperties = Pick<
  CSSProperties,
  'color' | 'backgroundColor'
>

const convertColorToCSS = (source?: ModelColorInterface) => {
  const color: ColorCSSProperties = {}

  if (!source) {
    return color
  }

  const { foreground, background } = source

  if (foreground) {
    color.color = foreground
  }

  if (background) {
    color.backgroundColor = background
  }

  return color
}

export default convertColorToCSS
