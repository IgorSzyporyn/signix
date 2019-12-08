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

const Wrapper = styled.div``

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: var(--spacing) calc(var(--spacing) + var(--gutter));
`

const Title = styled.h3`
  margin-left: var(--gutter);
  flex-grow: 1;
`

const ToolIcons = styled.div`
  display: flex;

  & > svg {
    margin-right: var(--half-gutter);
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Main = styled.div`
  padding-left: var(--spacing);
  padding-right: var(--spacing);
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
      Component = <PropertiesBackground {...propertiesProps} />
      break
    case 'text':
    case 'textstatic':
    case 'textdynamic':
      Component = <PropertiesBackground {...propertiesProps} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      Component = <PropertiesBackground {...propertiesProps} />
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
    <Wrapper>
      <Header>
        <MUIcon
          size="medium"
          render={p => <PermDataSettingOutlinedIcon {...p} />}
        />
        <Title>Properties</Title>
        <ToolIcons>
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
        </ToolIcons>
      </Header>
      {activeModel !== null && (
        <Main>
          <PropertyDimension model={activeModel} />
          <PropertyPosition model={activeModel} />
          {getComponent(activeModel, active)}
        </Main>
      )}
    </Wrapper>
  )
}

export default Properties
