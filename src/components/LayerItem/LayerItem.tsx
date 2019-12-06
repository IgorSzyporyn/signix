import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
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
  const { id } = model

  let { [id!]: expanded }: LayerStoreInterface = useStore(LayerStore)
  const { active }: ModelStoreInterface = useStore(ModelStore)

  if (expanded === undefined) {
    expanded = true
  }

  const hasItems = model.items && model.items.length > 0
  const isActive = active === model.id

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          console.log('single click')
          updateActiveInModelStore(isActive ? undefined : model.id)
        }}
        onDoubleClick={e => {
          console.log('doubleclick')
          e.stopPropagation()
        }}
        isActive={isActive}
        level={model.level || 0}
      >
        {hasItems && (
          <ExpandIconContainer
            onClick={() => {
              updateItemInLayerStore(!expanded, id!)
            }}
          >
            <ChevronIcon rotate={expanded ? '90' : '0'} />
          </ExpandIconContainer>
        )}
        <Title group={hasItems}>
          <LayerTitle model={model} />
        </Title>
      </Heading>
      {hasItems && (
        <Body hidden={!expanded}>
          <LayerItems items={model.items as ModelInterface[]} />
        </Body>
      )}
    </Wrapper>
  )
}

export default LayerItem
