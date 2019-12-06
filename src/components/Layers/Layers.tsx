import React from 'react'
import styled from 'styled-components'
import CollapseIcon from '../../icons/CollapseIcon/CollapseIcon'
import LayerItem from '../LayerItem/LayerItem'
import ModelInterface from '../../types/ModelInterface'

const Wrapper = styled.div`
  padding: var(--half-gutter) var(--half-gutter);
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
  border-bottom: 0.1rem solid var(--black);
  padding: 0 var(--half-gutter);
`

const Title = styled.h2`
  margin: 0;
`

const ToolIcons = styled.div`
  height: 3.2rem;
  display: flex;

  & > svg {
    width: 1.3rem;
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
  padding: var(--gutter) var(--half-gutter);
`

type LayersProps = {
  model: ModelInterface
}

const Layers = ({ model }: LayersProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>Layers</Title>
        <ToolIcons>
          <CollapseIcon />
        </ToolIcons>
      </Header>
      <Main>
        <LayerItem model={model} />
      </Main>
    </Wrapper>
  )
}

export default Layers
