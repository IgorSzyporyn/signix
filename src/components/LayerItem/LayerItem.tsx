import { useStore } from 'laco-react'
import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
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
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1.4rem;
  font-weight: 400;
  border-left: var(--quarter-gutter) solid transparent;
  padding: var(--gutter) var(--gutter) var(--gutter) var(--spacing);

  &[data-active='true'] {
    color: var(--color-lightest);
    border-left-color: var(--color-blue);
    background-color: var(--color-darkslate);
  }
`

const Title = styled.span``

const Body = styled.div``

const _handleClick = (e: MouseEvent<HTMLDivElement>) => {
  const { currentTarget } = e
  const { dataset } = currentTarget
  const { active, expanded, id, level } = dataset

  const isActive = active === 'true'
  const isExpanded = expanded === 'true'

  if (!isActive) {
    updateActiveInModelStore(isActive ? undefined : id)
  }

  if (level !== '0') {
    updateItemInLayerStore(!isExpanded, id)
  }
}

type LayerItemProps = {
  model: ModelInterface
}

const LayerItem = (props: LayerItemProps) => {
  const { model } = props
  const { id, items, group } = model

  const hasItems = items && items.length > 0
  const level = model.level || 0

  let { [id!]: expanded }: LayerStoreInterface = useStore(LayerStore)
  const { active }: ModelStoreInterface = useStore(ModelStore)

  const isActive = active === id

  if (expanded === undefined && level === 0) {
    expanded = true
  }

  const expandIconStyle = {
    ...getIconSize('normal'),
    transform: `rotate(${expanded ? '90deg' : '0deg'})`,
    marginLeft: 'calc(-1 * var(--spacing))',
    marginRight: 'var(--half-gutter)'
  }

  const layerIconProps = {
    hasItems,
    isActive,
    type: model.type,
    style: {
      ...getIconSize('medium'),
      marginRight: 'var(--gutter)',
      marginLeft: group ? 'calc(-1 * var(--half-gutter))' : 0
    }
  }

  return (
    <Wrapper>
      <Heading
        onClick={_handleClick}
        data-level={level}
        data-expanded={expanded}
        data-active={isActive}
        data-id={id}
      >
        {group && level > 0 && (
          <ChevronRightOutlinedIcon style={expandIconStyle} />
        )}
        <LayerIcon {...layerIconProps} />
        <Title>{model.name}</Title>
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
