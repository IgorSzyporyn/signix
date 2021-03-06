import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import WarningIcon from '@material-ui/icons/Warning'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import ApiQueryStore from '../../stores/ApiQueryStore'
import AppStore from '../../stores/AppStore'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import updateEditingModelInAppStore from '../../stores/appStore/updateEditingModelInAppStore'
import updateActiveTabInAppTabStore from '../../stores/appTabStore/updateActiveTabInAppTabStore'
import LayerStore from '../../stores/LayerStore'
import updateExpandedInLayerStore from '../../stores/layerStore/updateExpandedInLayerStore'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import AppStoreInterface from '../../types/AppStoreInterface'
import LayerStoreInterface from '../../types/LayerStoreInterface'
import ModelInterface from '../../types/ModelInterface'
import deleteModel from '../../utils/deleteModel'
import LayerItems from '../LayerItems/LayerItems'
import LayerItemTitle from '../LayerItemTitle/LayerItemTitle'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import MUIcon from '../MUIcon/MUIcon'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import ApiStore from '../../stores/ApiStore'

const Wrapper = styled.div`
  user-select: none;
`

const Heading = styled.div`
  border-left: var(--half-gutter) solid transparent;
  padding: var(--gutter) var(--gutter) var(--gutter) calc(var(--spacing-medium) - 0.2rem);

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
      margin-right: ${({ layerIsHidden }) => (layerIsHidden ? ' var(--gutter)' : 0)};
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
  moveLayer: (dragId: string, hoverId: string) => void
}

const LayerItemInner = (props: LayerItemInnerProps) => {
  const { model, moveLayer } = props
  const { items, group, hidden } = model
  const id = model.id!

  const { expanded }: LayerStoreInterface = useStore(LayerStore)
  const errorStore: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)
  const { activeModelId, editingModelId }: AppStoreInterface = useStore(AppStore)
  const { enabled: apiEnabled }: ApiStoreInterface = useStore(ApiStore)
  const { valid: apiValid, tested: apiTested }: ApiQueryStoreInterface = useStore(ApiQueryStore)

  const errors = errorStore.errors[id]

  const apiErrors = model.api && (!apiEnabled || !apiValid || !apiTested)
  const layerErrors = errors && errors.length > 0

  const level = model.level || 0
  const isActive = activeModelId === id
  const hasItems = items && items.length > 0
  const isEditingAny = !!editingModelId
  let isExpanded = expanded[id]

  if (isExpanded === undefined && level === 0) {
    isExpanded = true
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
        data-is-editing={isEditingAny}
      >
        <HeadingInner level={level}>
          <div style={{ position: 'relative' }}>
            <ModelTypeIcon
              onClick={() => {
                if (level !== 0 && group) {
                  updateExpandedInLayerStore(!isExpanded, id)
                }
              }}
              hasItems={hasItems}
              type={model.type}
              isExpanded={isExpanded}
              size="medium"
              style={{
                marginRight: 'var(--gutter)'
              }}
            />
            {(apiErrors || layerErrors) && (
              <MUIcon
                size="tiny"
                style={{
                  color: 'var(--color-warning)',
                  position: 'absolute',
                  top: '-3px',
                  right: '0'
                }}
                render={p => <WarningIcon {...p} />}
              />
            )}
          </div>
          <TitleWrapper
            onDoubleClick={() => {
              updateActiveTabInAppTabStore({ actionAreaActiveTab: 1 })
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
          <HiddenIconsWrapper layerIsHidden={hidden} className="hidden-icons-wrapper">
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
                      deleteModel(id)
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
        <Body hidden={!isExpanded}>
          <LayerItems items={items as ModelInterface[]} moveLayer={moveLayer} />
          {level > 0 && <LayerItemsBar level={level} />}
        </Body>
      )}
    </Wrapper>
  )
}

export default LayerItemInner
