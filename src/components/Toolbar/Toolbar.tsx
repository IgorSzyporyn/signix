import React from 'react'
import styled from 'styled-components'
import ToolbarItem from '../ToolbarItem/ToolbarItem'

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
      <ToolbarItem text="New"></ToolbarItem>
    </ItemContainer>
    <ItemContainer>
      <ToolbarItem text="Save"></ToolbarItem>
    </ItemContainer>
    <ItemContainer>
      <ToolbarItem text="Open"></ToolbarItem>
    </ItemContainer>
  </Wrapper>
)

export default Toolbar
