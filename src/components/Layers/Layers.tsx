import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { useStore } from 'laco-react'
import React from 'react'
import updateAllExpandedInLayerStore from '../../stores/layerStore/updateAllExpandedInLayerStore'
import ModelStore from '../../stores/ModelStore'
import LayerItem from '../LayerItem/LayerItem'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'
import styled from 'styled-components'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import { isEmpty } from 'lodash'
import LayersApiFixButton from '../LayersApiFixButton/LayersApiFixButton'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiStore from '../../stores/ApiStore'
import ApiStoreInterface from '../../types/ApiStoreInterface'

const handleCollapseAll = () => {
  updateAllExpandedInLayerStore(false)
}

const handleExpandAll = () => {
  updateAllExpandedInLayerStore(true)
}

const LayersError = styled.div`
  padding: 0 var(--spacing-medium);
`

const PanelBodyInner = styled.div`
  margin-top: var(--spacing-small);
`

const Layers = () => {
  const { model }: ModelStoreInterface = useStore(ModelStore)
  const { enabled: apiEnabled }: ApiStoreInterface = useStore(ApiStore)
  const apiErrors: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)
  const hasApiErrors = !isEmpty(apiErrors)

  return (
    <Panel>
      <PanelHeader
        topMargin
        title="Layers"
        icon={
          <MUIcon size="medium" render={p => <LayersOutlinedIcon {...p} />} />
        }
        actions={
          <>
            <MUIcon
              size="medium"
              title="Collapse All"
              interactive
              render={p => (
                <UnfoldLessIcon onClick={handleCollapseAll} {...p} />
              )}
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
      <PanelBody noPadding>
        {hasApiErrors && apiEnabled && (
          <LayersError>
            <LayersApiFixButton />
          </LayersError>
        )}
        <PanelBodyInner>
          <LayerItem model={model} />
        </PanelBodyInner>
      </PanelBody>
    </Panel>
  )
}

export default Layers
