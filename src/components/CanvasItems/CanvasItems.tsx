import React from 'react'
import { useDrop } from 'react-dnd'
import DragAndDropTypes from '../../types/DragAndDropTypes'
import ModelInterface from '../../types/ModelInterface'
import CanvasDropContainer from '../CanvasDropContainer/CanvasDropContainer'
import CanvasItem from '../CanvasItem/CanvasItem'

type CanvasItemsProps = { model: ModelInterface }

const CanvasItems = ({ model }: CanvasItemsProps) => {
  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: DragAndDropTypes.TOOLBOX,
    drop(item, monitor) {
      const didDrop = monitor.didDrop()
      const isOverSelf = monitor.isOver({ shallow: true })

      if (didDrop) {
        return
      } else if (isOverSelf) {
        return { id: model.id }
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  })

  return (
    <>
      {model.items.length > 0 &&
        model.items.map(item => (
          <CanvasItem
            key={`canvas-key${item.id}`}
            model={item as ModelInterface}
          />
        ))}
      <CanvasDropContainer
        hidden={!canDrop}
        ref={drop}
        isActive={canDrop && isOverCurrent}
        canDrop={canDrop}
        level={model.level}
      />
    </>
  )
}

export default CanvasItems
