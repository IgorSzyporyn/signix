// import { XYCoord } from 'dnd-core'
import React, { useRef } from 'react'
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'
import DragAndDropTypes from '../../types/DragAndDropTypes'
import ModelInterface from '../../types/ModelInterface'
import LayerItemInner from '../LayerItemInner/LayerItemInner'

type WrapperProps = {
  isHidden?: boolean
  isDisabled?: boolean
  isDragging: boolean
}

const Wrapper = styled.div<WrapperProps>`
  ${({ isHidden, isDisabled, isDragging }) => {
    let opacity = 1

    if (isDragging) {
      opacity = 0
    } else if (isHidden || isDisabled) {
      opacity = 0.6
    }

    return `opacity: ${opacity}`
  }}
`

type DragItemInterface = {
  type: string
  model: ModelInterface
}

type LayerItemProps = {
  model: ModelInterface
  moveLayer: (dragId: string, hoverId: string) => void
}

const LayerItem = (props: LayerItemProps) => {
  const { model, moveLayer } = props
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: DragAndDropTypes.LAYER,
    hover(item: DragItemInterface, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }

      const { model: dragModel } = item

      const dragId = dragModel.id!
      const hoverId = model.id!

      // Don't replace items with themselves
      if (dragId === hoverId) {
        return
      }

      // Determine rectangle on screen
      // const hoverBoundingRect = ref.current!.getBoundingClientRect()

      // Get vertical middle
      // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      // const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Time to actually perform the action
      moveLayer(dragId, hoverId)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // item.index = hoverId
    }
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: DragAndDropTypes.LAYER, model },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  })

  drag(drop(ref))

  return (
    <Wrapper ref={ref} isHidden={model.hidden} isDisabled={model.disabled} isDragging={isDragging}>
      <LayerItemInner {...props} moveLayer={moveLayer} />
    </Wrapper>
  )
}

export default LayerItem
