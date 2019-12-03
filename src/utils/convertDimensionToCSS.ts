import { CSSProperties } from 'react'
import ModelDimensionInterface from '../types/ModelDimensionInterface'

export type DimensionCSSProperties = Pick<CSSProperties, 'width' | 'height'>

const convertDimensionToCSS = (source?: ModelDimensionInterface) => {
  const dimension: DimensionCSSProperties = {}

  if (!source) {
    return dimension
  }

  const { disabled, width, height } = source

  if (disabled) {
    return dimension
  }

  if (!disabled && width) {
    dimension.width = `${width}px`
  }

  if (!disabled && height) {
    dimension.height = `${height}px`
  }

  return dimension
}

export default convertDimensionToCSS
