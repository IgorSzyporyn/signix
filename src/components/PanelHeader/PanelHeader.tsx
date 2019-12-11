import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding-bottom: var(--spacing);
  padding-left: calc(var(--spacing) + var(--half-gutter));
  padding-right: calc(var(--spacing) + var(--gutter));
  padding-top: var(--spacing);
`

const Title = styled.h3`
  flex-grow: 1;
  margin-left: var(--gutter);
`

const Actions = styled.div`
  display: flex;

  & > svg {
    cursor: pointer;
    margin-right: var(--half-gutter);

    &:last-child {
      margin-right: 0;
    }
  }
`

type PanelHeaderProps = {
  actions?: React.ReactNode
  icon?: React.ReactNode
  title?: string
}

const PanelHeader = ({ title, icon, actions }: PanelHeaderProps) => {
  return (
    <Wrapper>
      {icon}
      <Title>{title}</Title>
      <Actions>{actions}</Actions>
    </Wrapper>
  )
}

export default PanelHeader
