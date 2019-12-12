import PermDataSettingOutlinedIcon from '@material-ui/icons/PermDataSettingOutlined'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import getModelById from '../../stores/model/getModelById'
import ModelStore from '../../stores/ModelStore'
import setAllItemsInPropertyStore from '../../stores/property/setAllItemsInPropertyStore'
import ModelInterface from '../../types/ModelInterface'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'
import PropertiesBackground from '../PropertiesBackground/PropertiesBackground'
import PropertiesGroup from '../PropertiesGroup/PropertiesGroup'
import PropertiesImage from '../PropertiesImage/PropertiesImage'
import PropertiesTextDynamic from '../PropertiesTextDynamic/PropertiesTextDynamic'
import PropertiesTextStatic from '../PropertiesTextStatic/PropertiesTextStatic'
import getFontSize from '../../utils/getFontSize'

const PanelBodyInner = styled.div`
  margin-top: var(--half-gutter);
  padding: 0 var(--spacing-medium);
`

const PanelBodyEmpty = styled.div`
  text-align: center;
  padding-top: var(--spacing);
  font-size: ${getFontSize('small')};
`

const getComponent = (model: ModelInterface, active?: string) => {
  let Component = null

  let propertiesProps = {
    className: `properties-item-${model.type}`,
    model
  }

  switch (model.type) {
    case 'background':
      Component = <PropertiesBackground {...propertiesProps} />
      break
    case 'group':
      Component = <PropertiesGroup {...propertiesProps} />
      break
    case 'textstatic':
      Component = <PropertiesTextStatic {...propertiesProps} />
      break
    case 'textdynamic':
      Component = <PropertiesTextDynamic {...propertiesProps} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      Component = <PropertiesImage {...propertiesProps} />
      break
    default:
      Component = null
      break
  }

  return Component
}

const handleCollapseAll = () => {
  setAllItemsInPropertyStore(false)
}

const handleExpandAll = () => {
  setAllItemsInPropertyStore(true)
}

const Properties = () => {
  const { model, active } = useStore(ModelStore)
  const activeModel = getModelById(active, model)

  return (
    <Panel>
      <PanelHeader
        topMargin
        title={activeModel ? activeModel.name : 'Properties'}
        icon={
          activeModel ? (
            <ModelTypeIcon
              hasItems={activeModel.items && activeModel.items.length > 0}
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
      {activeModel ? (
        <PanelBody noPadding>
          <PanelBodyInner>{getComponent(activeModel, active)}</PanelBodyInner>
        </PanelBody>
      ) : (
        <PanelBodyEmpty>No layer selected</PanelBodyEmpty>
      )}
    </Panel>
  )
}

export default Properties
