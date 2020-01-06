import ModelPositionInterface from '../types/ModelPositionInterface'
import SizeInterface from '../types/SizeInterface'

const convertPositionToTranslate = (
  position: ModelPositionInterface,
  parent: SizeInterface,
  size: SizeInterface
) => {
  const { x: xOffset, y: yOffset, type } = position
  const translate = { x: xOffset, y: yOffset }
  const ownWidth = size ? size.width : 0
  const ownHeight = size ? size.height : 0
  const parentWidth = parent ? parent.width : 0
  const parentHeight = parent ? parent.height : 0

  switch (type) {
    case 'top-left':
      break
    case 'bottom-left':
      translate.y = parentHeight - (ownHeight + yOffset)
      break
    case 'bottom-right':
      translate.x = parentWidth - (ownWidth + xOffset)
      translate.y = parentHeight - (ownHeight + yOffset)
      break
    case 'top-right':
      translate.x = parentWidth - (ownWidth + xOffset)
      break
    default:
      break
  }

  return translate
}

export default convertPositionToTranslate
