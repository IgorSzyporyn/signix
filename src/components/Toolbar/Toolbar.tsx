import React from 'react'
import styled from 'styled-components'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import OpenIcon from '../../icons/OpenIcon/OpenIcon'
import SaveIcon from '../../icons/SaveIcon/SaveIcon'
import DocumentIcon from '../../icons/DocumentIcon/DocumentIcon'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`

const ItemContainer = styled.li`
  margin: 0 var(--gutter) 0 0;
  padding: 0;
  display: flex;
  align-items: center;

  &:last-child {
    margin: 0;
  }
`

const Toolbar = () => (
  <Wrapper>
    <ItemContainer>
      <ToolbarItem text="New">
        <DocumentIcon />
      </ToolbarItem>
    </ItemContainer>
    <ItemContainer>
      <ToolbarItem text="Save">
        <SaveIcon />
      </ToolbarItem>
    </ItemContainer>
    <ItemContainer>
      <ToolbarItem text="Open">
        <OpenIcon />
      </ToolbarItem>
    </ItemContainer>
  </Wrapper>
)

export default Toolbar
