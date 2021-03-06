import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ApiStore from '../../stores/ApiStore'
import updateAllExpandedInApiStore from '../../stores/apiStore/updateAllExpandedInApiStore'
import updateApiEnabled from '../../utils/updateApiEnabled'
import ApiDataQuery from '../ApiDataQuery/ApiDataQuery'
import ApiModelQuery from '../ApiModelQuery/ApiModelQuery'
import ApiValidationButton from '../ApiValidationButton/ApiValidationButton'
import ExpandableActions from '../ExpandableActions/ExpandableActions'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'

const PanelBodyInner = styled.div`
  margin-top: var(--half-gutter);
  padding: 0 var(--spacing-medium) var(--spacing-medium);
`

const Api = () => {
  const { enabled } = useStore(ApiStore)

  return (
    <Panel>
      <PanelHeader
        topMargin
        title="API"
        icon={<MUIcon size="medium" render={p => <CloudDownloadIcon {...p} />} />}
        actions={
          <ExpandableActions
            onExpandAll={() => {
              if (enabled) {
                updateAllExpandedInApiStore(true)
              }
            }}
            onCollapseAll={() => {
              if (enabled) {
                updateAllExpandedInApiStore(false)
              }
            }}
          />
        }
      />
      <PanelBody>
        <PanelBodyInner>
          <FieldCheckbox
            inline
            label="Enable API"
            checked={enabled}
            onChange={e => {
              updateApiEnabled(e.currentTarget.checked)
            }}
          />
          <div hidden={!enabled}>
            <ApiValidationButton />
            <ApiDataQuery />
            <ApiModelQuery />
          </div>
        </PanelBodyInner>
      </PanelBody>
    </Panel>
  )
}

export default Api
