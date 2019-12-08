import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import useComponentSize from '@rehooks/component-size'
import { useStore } from 'laco-react'
import React, { useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'
import setAllItemsInLayerStore from '../../stores/layer/setAllItemsInLayerStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import LayerItem from '../LayerItem/LayerItem'
import MUIcon from '../MUIcon/MUIcon'
import ScrollbarThumb from '../ScrollbarThumb/ScrollbarThumb'

import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined'

const Wrapper = styled.section`
  min-height: 100%;
  background-color: var(--color-darker);
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
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

const Main = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const handleCollapseAll = () => {
  setAllItemsInLayerStore(false)
}

const handleExpandAll = () => {
  setAllItemsInLayerStore(true)
}

const Layers = () => {
  const { model }: ModelStoreInterface = useStore(ModelStore)

  const refWrapper = useRef(null)
  const refHeader = useRef(null)
  const wrapperSize = useComponentSize(refWrapper)
  const headerSize = useComponentSize(refHeader)

  // @TODO - useComponentSize will stop firing a re-render at
  // certain points, or save the highest number it encountered

  return (
    <Wrapper ref={refWrapper}>
      <Header ref={refHeader}>
        <MUIcon size="medium" render={p => <LayersOutlinedIcon {...p} />} />
        <Title>Layers</Title>
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
      <Main>
        <Scrollbars
          autoHide
          style={{ height: wrapperSize.height - headerSize.height }}
          renderThumbVertical={ScrollbarThumb}
          renderThumbHorizontal={ScrollbarThumb}
        >
          <LayerItem model={model} />
        </Scrollbars>
      </Main>
    </Wrapper>
  )
}

export default Layers
