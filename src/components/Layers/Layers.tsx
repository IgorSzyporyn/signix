import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { useStore } from 'laco-react'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'
import setAllItemsInLayerStore from '../../stores/layer/setAllItemsInLayerStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import LayerItem from '../LayerItem/LayerItem'
import MUIcon from '../MUIcon/MUIcon'
import ScrollbarThumb from '../ScrollbarThumb/ScrollbarThumb'
import Panel from '../Panel/Panel'
import PanelHeader from '../PanelHeader/PanelHeader'
import PanelBody from '../PanelBody/PanelBody'

const Header = styled.header`
  padding-top: var(--spacing);
  padding-right: calc(var(--spacing) + var(--gutter));
  padding-left: calc(var(--spacing) + var(--gutter));
  padding-bottom: var(--spacing);
`

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
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

const Main = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
`

const handleCollapseAll = () => {
  setAllItemsInLayerStore(false)
}

const handleExpandAll = () => {
  setAllItemsInLayerStore(true)
}

const Layers = () => {
  const { model }: ModelStoreInterface = useStore(ModelStore)

  // @TODO - useComponentSize will stop firing a re-render at
  // certain points, or save the highest number it encountered

  return (
    <Panel>
      <PanelHeader
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
        <LayerItem model={model} />
      </PanelBody>
    </Panel>
  )
}

export default Layers
