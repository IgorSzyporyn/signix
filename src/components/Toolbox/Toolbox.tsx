import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import GridViewIcon from '../../icons/GridViewIcon/GridViewIcon'
import ListViewIcon from '../../icons/ListViewIcon/ListViewIcon'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import ToolboxItems from '../ToolboxItems/ToolboxItems'

const Wrapper = styled.div`
  padding: var(--half-gutter) var(--half-gutter);
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

const ViewIcons = styled.div`
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

const Main = styled.main`
  padding: var(--gutter) 0;
`

const handleSetGridView = (
  view: ToolboxViewTypes,
  setView: Dispatch<SetStateAction<ToolboxViewTypes>>
) => {
  if (view !== 'grid') {
    setView('grid')
    // @TODO - Update SettingsStore
  }
}

const handleSetListView = (
  view: ToolboxViewTypes,
  setView: Dispatch<SetStateAction<ToolboxViewTypes>>
) => {
  if (view !== 'list') {
    setView('list')
    // @TODO - Update SettingsStore
  }
}

type ToolboxProps = {
  view?: ToolboxViewTypes
}

const Toolbox = (props: ToolboxProps) => {
  const [view, setView] = useState<ToolboxViewTypes>(props.view || 'list')

  return (
    <Wrapper>
      <Header>
        <Title>Toolbox</Title>
        <ViewIcons>
          <ListViewIcon
            onClick={() => {
              handleSetListView(view, setView)
            }}
            fill={view === 'list' ? 'var(--blue)' : 'currentColor'}
          />
          <GridViewIcon
            onClick={() => {
              handleSetGridView(view, setView)
            }}
            fill={view === 'grid' ? 'var(--blue)' : 'currentColor'}
          />
        </ViewIcons>
      </Header>
      <Main>
        <ToolboxItems view={view as ToolboxViewTypes} />
      </Main>
    </Wrapper>
  )
}

export default Toolbox
