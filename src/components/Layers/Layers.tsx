import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { useStore } from 'laco-react'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import updateAllExpandedInLayerStore from '../../stores/layerStore/updateAllExpandedInLayerStore'
import getModelById from '../../stores/model/getModelById'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelStore from '../../stores/ModelStore'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import LayerItem from '../LayerItem/LayerItem'
import LayersApiFixButton from '../LayersApiFixButton/LayersApiFixButton'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'

const handleCollapseAll = () => {
  updateAllExpandedInLayerStore(false)
}

const handleExpandAll = () => {
  updateAllExpandedInLayerStore(true)
}

const PanelBodyInner = styled.div`
  margin-top: var(--spacing-small);
`

const Layers = () => {
  const { model }: ModelStoreInterface = useStore(ModelStore)

  const moveLayer = useCallback(
    (dragId: string, hoverId: string) => {
      // If hoverId is root - then do nothing
      if (hoverId === model.id) {
        return false
      }

      const hoverItem = getModelById(hoverId, model)
      const dragItem = getModelById(dragId, model)

      if (hoverItem && dragItem) {
        const hoverParent = getModelById(hoverItem.parentId, model)
        const dragParent = getModelById(dragItem.parentId, model)

        if (hoverParent && dragParent) {
          const sameParent = hoverParent.id === dragParent.id

          const hoverIndex = hoverParent.items.findIndex(item => item.id === hoverItem.id)
          const dragIndex = dragParent.items.findIndex(item => item.id === dragItem.id)

          dragParent.items.splice(dragIndex, 1)

          if (sameParent) {
            dragParent.items.splice(hoverIndex, 0, dragItem)
            updateItemInModelStore(dragParent)
          } else {
            dragItem.parentId = hoverParent.id
            hoverParent.items.splice(hoverIndex, 0, dragItem)
            updateItemInModelStore(dragParent)
            updateItemInModelStore(hoverParent)
          }
        }
      }
    },
    [model]
  )

  return (
    <Panel>
      <PanelHeader
        topMargin
        title="Layers"
        icon={<MUIcon size="medium" render={p => <LayersOutlinedIcon {...p} />} />}
        actions={
          <>
            <MUIcon
              size="medium"
              title="Collapse All"
              interactive
              render={p => <UnfoldLessIcon onClick={handleCollapseAll} {...p} />}
            />
            <MUIcon
              size="medium"
              interactive
              title="Expand All"
              render={p => <UnfoldMoreIcon onClick={handleExpandAll} {...p} />}
            />
          </>
        }
      />
      <PanelBody>
        <LayersApiFixButton />
        <PanelBodyInner>
          <LayerItem model={model} moveLayer={moveLayer} />
        </PanelBodyInner>
      </PanelBody>
    </Panel>
  )
}

export default Layers
