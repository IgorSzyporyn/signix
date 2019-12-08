import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateItemInLayerStore from '../../stores/layer/updateItemInLayerStore'
import LayerStore, { LayerStoreInterface } from '../../stores/LayerStore'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import ModelInterface from '../../types/ModelInterface'
import getIconSize from '../../utils/getIconSize'
import LayerIcon from '../LayerIcon/LayerIcon'
import LayerItems from '../LayerItems/LayerItems'
import LayerItemTitle from '../LayerItemTitle/LayerItemTitle'
import MUIcon from '../MUIcon/MUIcon'

const Wrapper = styled.li`
  user-select: none;
`

const Heading = styled.div`
  border-left: var(--half-gutter) solid transparent;
  padding: var(--gutter) var(--gutter) var(--gutter)
    calc(var(--spacing) + var(--half-gutter));

  &[data-active='true'] {
    color: var(--color-white);
    border-left-color: var(--color-lightblue);
    background-color: var(--color-darkslate);
  }

  .layer-title-icon {
    display: none;
  }

  &:hover .layer-title-icon {
    display: flex;
  }

  &[data-is-editing='true'] .layer-title-icon {
    display: none;
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
  padding-right: var(--spacing);

  ${({ level }) => {
    if (level <= 1) {
      return null
    }

    return `padding-left: calc(${level - 1} * var(--spacing));`
  }}
`

const LayerTitle = styled.div`
  flex-grow: 1;
`

const LayerTitleIcons = styled.div`
  & > * {
    margin-right: var(--gutter);

    &:last-child {
      margin-right: 0;
    }
  }
`

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
  background-color: var(--color-lightblue);
  opacity: 0.8;
`

type LayerItemProps = {
  model: ModelInterface
}

const LayerItem = (props: LayerItemProps) => {
  const { model } = props
  const { id, items, group } = model

  let { [id!]: expanded }: LayerStoreInterface = useStore(LayerStore)
  const { active, editing }: ModelStoreInterface = useStore(ModelStore)

  const isEditingAny = !!editing
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
        onClick={() => {
          if (!isActive && !isEditingAny) {
            updateActiveInModelStore(isActive ? undefined : id)
          }

          if (level !== 0 && group && hasItems && !isEditingAny) {
            updateItemInLayerStore(!expanded, id)
          }
        }}
        data-active={isActive}
        data-expanded={expanded}
        data-group={group}
        data-has-items={hasItems}
        data-is-editing={isEditingAny}
        data-editing={editing}
        data-id={id}
        data-level={level}
      >
        <HeadingInner level={level}>
          <LayerIcon {...layerIconProps} />
          <LayerTitle>
            <LayerItemTitle
              disabled={isEditingAny}
              id={model.id}
              title={model.name}
            />
          </LayerTitle>
          <LayerTitleIcons className="layer-title-icon">
            <MUIcon interactive={true} render={p => <EditIcon {...p} />} />
            <MUIcon
              hoverColor="var(--color-red)"
              interactive={true}
              render={p => <DeleteIcon {...p} />}
            />
          </LayerTitleIcons>
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
