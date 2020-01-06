import { CSSProperties } from 'react'
import SizeInterface from '../types/SizeInterface'
import ModelPositionInterface from '../types/ModelPositionInterface'
import convertPositionToTranslate from './convertPositionToTranslate'

export type PositionCSSProperties = Pick<CSSProperties, 'position' | 'transform'>

const convertPositionToCSS = (
  source: ModelPositionInterface,
  parent: SizeInterface,
  size: SizeInterface
) => {
  const { x: xTranslate, y: yTranslate } = convertPositionToTranslate(source, parent, size)

  const position: PositionCSSProperties = {
    position: 'absolute',
    transform: `translate(${xTranslate}px, ${yTranslate}px)`
  }

  return position
}

export default convertPositionToCSS
