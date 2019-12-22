import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateAllExpandedInLayerStore from '../../stores/layerStore/updateAllExpandedInLayerStore'
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
          <LayerItem model={model} />
        </PanelBodyInner>
      </PanelBody>
    </Panel>
  )
}

export default Layers
