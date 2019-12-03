import React from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import styled from 'styled-components'
import Models from '../../models/Models'
import addItemToModelStore from '../../stores/model/addItemToModelStore'
import DragAndDropTypes from '../../types/DragAndDropTypes'
import ToolboxItemProps from '../../types/ToolboxItemProps'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'

type WrapperProps = { view?: ToolboxViewTypes; isDragging: boolean }

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ view }: WrapperProps) => `
    justify-content: ${view === 'grid' ? 'center' : 'normal'};
  `}
`

const TitleContainer = styled.div`
  margin-right: var(--half-gutter);
`

const IconContainer = styled.div`
  margin: 0 var(--half-gutter);
  display: flex;
  align-items: center;

  & > svg {
    width: 3.2rem;
  }
`

const Title = styled.h4`
  margin: 0 0 0.2rem 0;
`

const Subtitle = styled.h6`
  line-height: 1.2rem;
  margin: 0;
`

const ToolboxItem = ({
  IconComponent: Icon,
  type,
  view,
  title,
  subtitle
}: ToolboxItemProps) => {
  const model = Models[type]

  const [{ isDragging }, drag] = useDrag({
    item: { name: type, type: DragAndDropTypes.TOOLBOX },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        addItemToModelStore(model, dropResult.id)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <Wrapper ref={drag} view={view} isDragging={isDragging}>
      {Icon && <IconContainer title={title}>{<Icon />}</IconContainer>}
      {view === 'list' && (
        <TitleContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleContainer>
      )}
    </Wrapper>
  )
}

ToolboxItem.defaultProps = {
  view: 'list'
}

export default ToolboxItem
