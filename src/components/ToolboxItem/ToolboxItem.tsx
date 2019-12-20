import { useStore } from 'laco-react'
import React from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import styled from 'styled-components'
import Models from '../../models/Models'
import addItemToModelStore from '../../stores/model/addItemToModelStore'
import getModelById from '../../stores/model/getModelById'
import ModelStore from '../../stores/ModelStore'
import DragAndDropTypes from '../../types/DragAndDropTypes'
import ToolboxItemProps from '../../types/ToolboxItemProps'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'
import AppStoreInterface from '../../types/AppStoreInterface'
import AppStore from '../../stores/AppStore'
import ModelStoreInterface from '../../types/ModelStoreInterface'

type WrapperProps = { view?: ToolboxViewTypes; isDragging: boolean }

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ view }: WrapperProps) => `
    justify-content: ${view === 'grid' ? 'center' : 'normal'};
  `}
`

const TitleContainer = styled.div`
  margin-left: var(--spacing);
`

const ToolboxItem = ({ type, view, title, subtitle }: ToolboxItemProps) => {
  const { model: rootModel }: ModelStoreInterface = useStore(ModelStore)
  const { activeModelId }: AppStoreInterface = useStore(AppStore)
  const modelTemplate = Models[type]

  const [{ isDragging }, drag] = useDrag({
    begin: () => {
      updateActiveModelInAppStore(undefined)
    },
    item: { name: type, type: DragAndDropTypes.TOOLBOX },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        addItemToModelStore(modelTemplate, dropResult.id)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <Wrapper
      ref={drag}
      view={view}
      isDragging={isDragging}
      onDoubleClick={() => {
        if (activeModelId) {
          const activeModel = getModelById(activeModelId, rootModel)

          if (activeModel && activeModel.id) {
            if (activeModel.group) {
              addItemToModelStore(modelTemplate, activeModel.id)
            } else if (activeModel.parentId) {
              const activeParentModel = getModelById(activeModel.parentId, rootModel)

              if (activeParentModel && activeParentModel.id && activeParentModel.group) {
                addItemToModelStore(modelTemplate, activeParentModel.id)
              }
            }
          }
        } else {
          if (rootModel.id) {
            addItemToModelStore(modelTemplate, rootModel.id)
          }
        }
      }}
    >
      <ModelTypeIcon type={type} size="medium" hasItems={true} />
      {view === 'list' && (
        <TitleContainer>
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
        </TitleContainer>
      )}
    </Wrapper>
  )
}

ToolboxItem.defaultProps = {
  view: 'list'
}

export default ToolboxItem
