import { DraggableData } from 'react-draggable'
import SizeInterface from '../types/SizeInterface'
import ModelPositionInterface from '../types/ModelPositionInterface'

const getOffsetFromDrag = (
  dragData: DraggableData,
  position: ModelPositionInterface,
  parent: SizeInterface,
  size: SizeInterface
) => {
  const { type } = position
  const { x: xDragOffset, y: yDragOffset } = dragData
  const { width: parentWidth, height: parentHeight } = parent
  const { width: ownWidth, height: ownHeight } = size
  const offset = {
    x: xDragOffset,
    y: yDragOffset
  }

  switch (type) {
    case 'top-left':
      break
    case 'bottom-left':
      offset.y = parentHeight - ownHeight - yDragOffset
      break
    case 'bottom-right':
      offset.x = parentWidth - ownWidth - xDragOffset
      offset.y = parentHeight - ownHeight - yDragOffset
      break
    case 'top-right':
      offset.x = parentWidth - ownWidth - xDragOffset
      break
    default:
      break
  }

  return offset
}

export default getOffsetFromDrag
