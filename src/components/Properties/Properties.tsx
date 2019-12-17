import PermDataSettingOutlinedIcon from '@material-ui/icons/PermDataSettingOutlined'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import AppStore from '../../stores/AppStore'
import getModelById from '../../stores/model/getModelById'
import ModelStore from '../../stores/ModelStore'
import updateAllExpandedInPropertyStore from '../../stores/propertyStore/updateAllExpandedInPropertyStore'
import AppStoreInterface from '../../types/AppStoreInterface'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import getFontSize from '../../utils/getFontSize'
import ExpandableActions from '../ExpandableActions/ExpandableActions'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'
import PropertiesItem from '../PropertiesItem/PropertiesItem'

const PanelBodyInner = styled.div`
  margin-top: var(--half-gutter);
  padding: 0 var(--spacing-medium) var(--spacing-medium);
`

const PanelBodyEmpty = styled.div`
  text-align: center;
  padding-top: var(--spacing);
  font-size: ${getFontSize('small')};
`

const Properties = () => {
  const { model: rootModel }: ModelStoreInterface = useStore(ModelStore)
  const appStore: AppStoreInterface = useStore(AppStore)

  const activeModel = getModelById(appStore.activeModelId, rootModel)

  return (
    <Panel>
      <PanelHeader
        topMargin
        title={activeModel ? activeModel.name : 'Properties'}
        icon={
          activeModel ? (
            <ModelTypeIcon
              hasItems={activeModel.items.length > 0}
              size="medium"
              type={activeModel.type}
            />
          ) : (
            <MUIcon
              size="medium"
              render={p => <PermDataSettingOutlinedIcon {...p} />}
            />
          )
        }
        actions={
          <ExpandableActions
            onCollapseAll={() => {
              updateAllExpandedInPropertyStore(false)
            }}
            onExpandAll={() => {
              updateAllExpandedInPropertyStore(true)
            }}
          />
        }
      />
      {activeModel ? (
        <PanelBody noPadding>
          <PanelBodyInner>
            <PropertiesItem model={activeModel} />
          </PanelBodyInner>
        </PanelBody>
      ) : (
        <PanelBodyEmpty>No layer selected</PanelBodyEmpty>
      )}
    </Panel>
  )
}

export default Properties
