import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import getModelById from '../../stores/model/getModelById'
import ModelStore from '../../stores/ModelStore'
import setAllItemsInPropertyStore from '../../stores/property/setAllItemsInPropertyStore'
import ModelInterface from '../../types/ModelInterface'
import MUIcon from '../MUIcon/MUIcon'
import PropertiesBackground from '../PropertiesBackground/PropertiesBackground'
import PropertyDimension from '../PropertyDimension/PropertyDimension'
import PropertyPosition from '../PropertyPosition/PropertyPosition'
import PermDataSettingOutlinedIcon from '@material-ui/icons/PermDataSettingOutlined'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertiesText from '../PropertiesText/PropertiesText'
import PropertiesImage from '../PropertiesImage/PropertiesImage'
import PropertiesGroup from '../PropertiesGroup/PropertiesGroup'
import Panel from '../Panel/Panel'
import PanelHeader from '../PanelHeader/PanelHeader'
import PanelBody from '../PanelBody/PanelBody'

const PanelBodyInner = styled.div`
  padding: 0 calc(var(--spacing) + var(--half-gutter));
`

const getComponent = (model: ModelInterface, active?: string) => {
  let Component = null

  let propertiesProps = {
    className: `canvas-item-${model.type}`,
    model
  }

  if (active === model.id) {
    propertiesProps.className += ` canvas-item-active`
  }

  switch (model.type) {
    case 'background':
      Component = <PropertiesBackground {...propertiesProps} />
      break
    case 'group':
      Component = <PropertiesGroup {...propertiesProps} />
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      Component = <PropertiesText {...propertiesProps} />
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
      {activeModel !== null && (
        <PanelBody noPadding>
          <PanelBodyInner>
            <PropertyDimension model={activeModel} />
            {activeModel.level! > 0 && <PropertyPosition model={activeModel} />}
            <PropertyColor model={activeModel} />
            {getComponent(activeModel, active)}
          </PanelBodyInner>
        </PanelBody>
      )}
    </Panel>
  )
}

export default Properties
