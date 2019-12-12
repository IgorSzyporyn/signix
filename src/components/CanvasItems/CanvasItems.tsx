import React from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'
import DragAndDropTypes from '../../types/DragAndDropTypes'
import ModelInterface from '../../types/ModelInterface'
import CanvasDropContainer from '../CanvasDropContainer/CanvasDropContainer'
import CanvasItem from '../CanvasItem/CanvasItem'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

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
      {model.items &&
        model.items.map(item => (
          <CanvasItem
            key={`canvas-key${item.id}`}
            model={item as ModelInterface}
          />
        ))}
      <CanvasDropContainer
        ref={drop}
        isActive={canDrop && isOverCurrent}
        canDrop={canDrop}
        level={model.level}
      />
    </>
  )
}

export default CanvasItems
