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
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DragAndDropTypes.TOOLBOX,
    drop: () => ({ id: model.id! }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  return (
    <Wrapper>
      {model.items &&
        model.items.map(item => (
          <CanvasItem key={`canvas-key${item.id}`} model={item} />
        ))}
      <CanvasDropContainer
        ref={drop}
        isActive={canDrop && isOver}
        canDrop={canDrop}
      />
    </Wrapper>
  )
}

export default CanvasItems
