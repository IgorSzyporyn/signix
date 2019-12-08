import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'
import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import getIconSize from '../../utils/getIconSize'
import ToolboxItems from '../ToolboxItems/ToolboxItems'

const Wrapper = styled.section`
  background-color: var(--color-darker);
  min-height: 100%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  margin: 0;
`

const ViewIcons = styled.div`
  display: flex;

  & > svg {
    margin-right: var(--half-gutter);
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Main = styled.main``

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

const getIconStyle = (
  view: ToolboxViewTypes,
  currentView: ToolboxViewTypes
) => ({
  ...getIconSize('normal'),
  color: view === currentView ? 'var(--color-blue)' : 'currentColor'
})

const Toolbox = (props: ToolboxProps) => {
  const [view, setView] = useState<ToolboxViewTypes>(props.view || 'list')

  return (
    <Wrapper>
      <Header>
        <Title>Toolbox</Title>
        <ViewIcons>
          <FormatListBulletedOutlinedIcon
            onClick={() => {
              handleSetListView(view, setView)
            }}
            style={getIconStyle('list', view)}
          />
          <AppsOutlinedIcon
            onClick={() => {
              handleSetGridView(view, setView)
            }}
            style={getIconStyle('grid', view)}
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
