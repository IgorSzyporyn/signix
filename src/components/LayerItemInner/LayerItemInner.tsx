import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateItemInLayerStore from '../../stores/layer/updateItemInLayerStore'
import LayerStore, { LayerStoreInterface } from '../../stores/LayerStore'
import deleteItemInModelStore from '../../stores/model/deleteItemInModelStore'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelStore from '../../stores/ModelStore'
import updateActionAreaInAppStore from '../../stores/appStore/updateActionAreaInAppStore'
import ModelInterface from '../../types/ModelInterface'
import LayerItems from '../LayerItems/LayerItems'
import LayerItemTitle from '../LayerItemTitle/LayerItemTitle'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import MUIcon from '../MUIcon/MUIcon'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import updateEditingModelInAppStore from '../../stores/appStore/updateEditingModelInAppStore'
import AppStoreInterface from '../../types/AppStoreInterface'
import AppStore from '../../stores/AppStore'

const Wrapper = styled.li`
  user-select: none;
`

const Heading = styled.div`
  border-left: var(--half-gutter) solid transparent;
  padding: var(--gutter) var(--gutter) var(--gutter)
    calc(var(--spacing-medium) - 0.2rem);

  &[data-active='true'] {
    color: var(--color-white);
    border-left-color: var(--color-lightblue);
    background-color: var(--color-darkslate);
  }

  .hidden-icons-wrapper {
    display: none;
  }

  &:hover .hidden-icons-wrapper {
    display: flex;
  }

  &[data-is-editing='true'] .hidden-icons-wrapper {
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

const TitleWrapper = styled.div`
  flex-grow: 1;
  line-height: 2.7rem;
  margin-left: var(--half-gutter);
`

type HiddenIconsWrapperProps = {
  layerIsHidden?: boolean
}

const HiddenIconsWrapper = styled.div<HiddenIconsWrapperProps>`
  & > * {
    margin-right: var(--gutter);

    &:last-child {
      margin-right: ${({ layerIsHidden }) =>
        layerIsHidden ? ' var(--gutter)' : 0};
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

type LayerItemInnerProps = {
  model: ModelInterface
}

const LayerItemInner = (props: LayerItemInnerProps) => {
  const { model } = props
  const { id, items, group, hidden } = model

  let { [id!]: expanded }: LayerStoreInterface = useStore(LayerStore)
  const { activeModelId, editingModelId }: AppStoreInterface = useStore(
    AppStore
  )

  const isEditingAny = !!editingModelId
  const hasItems = items && items.length > 0
  const level = model.level || 0
  const isActive = activeModelId === id

  if (expanded === undefined && level === 0) {
    expanded = true
  }

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          if (!isActive) {
            updateActiveModelInAppStore(id)
            updateEditingModelInAppStore(undefined)
          }
        }}
        data-active={isActive}
        data-expanded={expanded}
        data-group={group}
        data-has-items={hasItems}
        data-is-editing={isEditingAny}
        data-editing={editingModelId}
        data-id={id}
        data-level={level}
      >
        <HeadingInner level={level}>
          <ModelTypeIcon
            onClick={() => {
              if (level !== 0 && group) {
                updateItemInLayerStore(!expanded, id)
              }
            }}
            hasItems={hasItems}
            type={model.type}
            isExpanded={expanded}
            size="medium"
            style={{
              marginRight: 'calc(0.75 * var(--gutter))'
            }}
          />
          <TitleWrapper
            onDoubleClick={() => {
              updateActionAreaInAppStore({ activeTab: 1 })
            }}
          >
            <LayerItemTitle
              disabled={isEditingAny}
              title={model.name}
              editing={editingModelId === id}
              onEditEnd={name => {
                updateItemInModelStore({ name, id })
                updateEditingModelInAppStore(undefined)
              }}
            />
          </TitleWrapper>
          <HiddenIconsWrapper
            layerIsHidden={hidden}
            className="hidden-icons-wrapper"
          >
            <MUIcon
              interactive={true}
              render={p => (
                <EditIcon
                  onClick={() => {
                    updateEditingModelInAppStore(id)
                  }}
                  {...p}
                />
              )}
            />
            {level > 0 && (
              <MUIcon
                hoverColor="var(--color-red)"
                interactive={true}
                render={p => (
                  <DeleteIcon
                    onClick={() => {
                      deleteItemInModelStore(id)
                    }}
                    {...p}
                  />
                )}
              />
            )}
            {!hidden && (
              <MUIcon
                interactive={true}
                render={p => (
                  <VisibilityIcon
                    onClick={() => {
                      updateItemInModelStore({ id: model.id, hidden: true })
                    }}
                    {...p}
                  />
                )}
              />
            )}
          </HiddenIconsWrapper>
          {hidden && (
            <MUIcon
              interactive={true}
              render={p => (
                <VisibilityOffIcon
                  onClick={() => {
                    updateItemInModelStore({ id: model.id, hidden: false })
                  }}
                  {...p}
                />
              )}
            />
          )}
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

export default LayerItemInner
