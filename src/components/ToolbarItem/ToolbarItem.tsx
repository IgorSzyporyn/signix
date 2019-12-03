import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  background: none;
  margin: 0;
  padding: 0;
  line-height: 1.2rem;
  border: 0 none;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    width: 2.1rem;
    height: 100%;
  }

  & > * {
    margin-right: var(--half-gutter);
  }

  & > *:last-child {
    margin-right: 0;
  }
`

type ToolbarItemProps = {
  children?: React.ReactNode
  text: string
  onInteract?: () => void
}

const ToolbarItem = ({ onInteract, children, text }: ToolbarItemProps) => (
  <Wrapper onClick={onInteract}>
    {children}
    <span>{text}</span>
  </Wrapper>
)

export default ToolbarItem
