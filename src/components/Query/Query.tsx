import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import QueryStore from '../../stores/QueryStore'
import updateAllExpandedInQueryStore from '../../stores/queryStore/updateAllExpandedInQueryStore'
import updateEnabledInQueryStore from '../../stores/queryStore/updateEnabledInQueryStore'
import ExpandableActions from '../ExpandableActions/ExpandableActions'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'
import QueryData from '../QueryData/QueryData'
import QueryModel from '../QueryModel/QueryModel'
import QueryValidator from '../QueryValidator/QueryValidator'

const PanelBodyInner = styled.div`
  margin-top: var(--half-gutter);
  padding: 0 var(--spacing-medium);
`

const Query = () => {
  const { enabled } = useStore(QueryStore)

  return (
    <Panel>
      <PanelHeader
        topMargin
        title="API"
        icon={
          <MUIcon size="medium" render={p => <CloudDownloadIcon {...p} />} />
        }
        actions={
          <ExpandableActions
            onExpandAll={() => {
              if (enabled) {
                updateAllExpandedInQueryStore(true)
              }
            }}
            onCollapseAll={() => {
              if (enabled) {
                updateAllExpandedInQueryStore(false)
              }
            }}
          />
        }
      />
      <PanelBody noPadding>
        <PanelBodyInner>
          <FieldCheckbox
            inline
            label="Enable API"
            checked={enabled}
            onChange={e => {
              updateEnabledInQueryStore(e.currentTarget.checked)
              updateAllExpandedInQueryStore(true)
            }}
          />
          <div hidden={!enabled}>
            <QueryValidator />
            <QueryData />
            <QueryModel />
          </div>
        </PanelBodyInner>
      </PanelBody>
    </Panel>
  )
}

export default Query
