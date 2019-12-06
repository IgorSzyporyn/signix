import React from 'react'
import styled from 'styled-components'
import LayerItem from '../LayerItem/LayerItem'
import ModelInterface from '../../types/ModelInterface'

const Wrapper = styled.div`
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--half-gutter);
`

const Title = styled.h4`
  margin: 0;
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

type LayersProps = {
  model: ModelInterface
}

const Layers = ({ model }: LayersProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>Layers</Title>
        <ToolIcons></ToolIcons>
      </Header>
      <Main>
        <LayerItem model={model} />
      </Main>
    </Wrapper>
  )
}

export default Layers
