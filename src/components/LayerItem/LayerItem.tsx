import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import useClickPreventionOnDoubleClick from '../../hooks/useClickPreventionOnDoubleClick'
import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon'
import updateItemInLayerStore from '../../stores/layer/updateItemInLayerStore'
import LayerStore, { LayerStoreInterface } from '../../stores/LayerStore'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import ModelInterface from '../../types/ModelInterface'
import LayerItems from '../LayerItems/LayerItems'
import LayerTitle from '../LayerTitle/LayerTitle'

const Wrapper = styled.li`
  user-select: none;
`

type HeadingProps = {
  isActive: boolean
  level: number
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding: var(--half-gutter) var(--half-gutter);
  position: relative;

  ${({ isActive, level }: HeadingProps) => {
    return isActive
      ? `
        &:after {
          content: '';
          background-color: var(--darkgray);
          position: absolute;
          top: 0;
          left: -${level * 1.6}rem;
          right: 0;
          bottom: 0;
          z-index: 10;
          border-radius: 0.3rem;
        }
      `
      : null
  }}
`

const ExpandIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: var(--half-gutter);
  z-index: 20;

  & > svg {
    width: var(--half-gutter);
    height: var(--half-gutter);
  }
`

type TitleProps = {
  group: boolean
}

const Title = styled.div`
  flex-grow: 1;
  z-index: 20;

  ${({ group }: TitleProps) => {
    return group ? null : `margin-left: var(--gutter);`
  }}
`

const Body = styled.div`
  padding-left: var(--gutter);
`

type LayerItemProps = {
  model: ModelInterface
}

const LayerItem = (props: LayerItemProps) => {
  const { model } = props
  const { id, items } = model

  const hasItems = items && items.length > 0
  const level = model.level || 0

  let { [id!]: expanded }: LayerStoreInterface = useStore(LayerStore)
  const { active }: ModelStoreInterface = useStore(ModelStore)

  const isActive = active === id
  const iconRotation = expanded ? '90' : '0'

  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    () => {
      updateActiveInModelStore(isActive ? undefined : id)
    },
    () => {
      console.log('doubleclick')
    }
  )

  if (expanded === undefined) {
    expanded = true
  }

  return (
    <Wrapper>
      <Heading
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        isActive={isActive}
        level={level}
      >
        {hasItems && (
          <ExpandIconContainer
            onClick={() => {
              updateItemInLayerStore(!expanded, id!)
            }}
          >
            <ChevronIcon rotate={iconRotation} />
          </ExpandIconContainer>
        )}
        <Title group={hasItems}>
          <LayerTitle model={model} />
        </Title>
      </Heading>
      {hasItems && (
        <Body hidden={!expanded}>
          <LayerItems items={items as ModelInterface[]} />
        </Body>
      )}
    </Wrapper>
  )
}

export default LayerItem
