import { useStore } from 'laco-react'
import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import updateItemInLayerStore from '../../stores/layer/updateItemInLayerStore'
import LayerStore, { LayerStoreInterface } from '../../stores/LayerStore'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import ModelInterface from '../../types/ModelInterface'
import getIconSize from '../../utils/getIconSize'
import LayerIcon from '../LayerIcon/LayerIcon'
import LayerItems from '../LayerItems/LayerItems'

const Wrapper = styled.li`
  user-select: none;
`

const Heading = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  border-left: var(--quarter-gutter) solid transparent;
  padding: var(--gutter) var(--gutter) var(--gutter)
    calc(var(--spacing) + var(--half-gutter));

  &[data-active='true'] {
    color: var(--color-white);
    border-left-color: var(--color-lightblue);
    background-color: var(--color-darkslate);
  }

  &:hover {
    &:not([data-active='true']) {
      background-color: var(--color-darkest);
    }
  }
`

type WithLevelProps = {
  level: number
}

const HeadingInner = styled.div<WithLevelProps>`
  display: flex;
  align-items: center;

  ${({ level }) => {
    if (level <= 1) {
      return null
    }

    return `padding-left: calc(${level - 1} * var(--spacing));`
  }}
`

const Title = styled.span``

const Body = styled.div`
  position: relative;
`

const LayerItemsBar = styled.span<WithLevelProps>`
  position: absolute;
  top: 0;
  ${({ level }) => `left: ${level * 16 - level * 3}px`}
  right: 0;
  bottom: 0;
  width: 0.2rem;
  background-color: var(--color-light);
  opacity: 0.4;
`

const _handleClick = (e: MouseEvent<HTMLDivElement>) => {
  const { currentTarget } = e
  const { dataset } = currentTarget
  const { active, expanded, id, level, group, hasItems } = dataset

  const isActive = active === 'true'
  const isExpanded = expanded === 'true'

  if (!isActive) {
    updateActiveInModelStore(isActive ? undefined : id)
  }

  if (level !== '0' && group === 'true' && hasItems === 'true') {
    updateItemInLayerStore(!isExpanded, id)
  }
}

type LayerItemProps = {
  model: ModelInterface
}

const LayerItem = (props: LayerItemProps) => {
  const { model } = props
  const { id, items, group } = model

  let { [id!]: expanded }: LayerStoreInterface = useStore(LayerStore)
  const { active }: ModelStoreInterface = useStore(ModelStore)

  const hasItems = items && items.length > 0
  const level = model.level || 0
  const isActive = active === id

  if (expanded === undefined && level === 0) {
    expanded = true
  }

  const layerIconProps = {
    hasItems,
    isActive,
    type: model.type,
    isExpanded: expanded,
    isGroup: group,
    style: {
      ...getIconSize('medium'),
      marginRight: 'calc(0.75 * var(--gutter))'
    }
  }

  return (
    <Wrapper>
      <Heading
        onClick={_handleClick}
        data-active={isActive}
        data-expanded={expanded}
        data-group={group}
        data-has-items={hasItems}
        data-id={id}
        data-level={level}
      >
        <HeadingInner level={level}>
          <LayerIcon {...layerIconProps} />
          <Title>{model.name}</Title>
        </HeadingInner>
      </Heading>
      {hasItems && (
        <Body hidden={!expanded}>
          <LayerItems items={items as ModelInterface[]} />
          {level > 0 && <LayerItemsBar level={level} />}
        </Body>
      )}
    </Wrapper>
  )
}

export default LayerItem
