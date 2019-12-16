import React from 'react'
import styled from 'styled-components'

type WrapperProps = {
  topMargin?: boolean
}

const Wrapper = styled.header<WrapperProps>`
  align-items: center;
  display: flex;
  padding-left: var(--spacing-medium);
  padding-right: calc(var(--spacing) + var(--gutter));
  min-height: calc(var(--gutter) * 7);
  margin-top: ${({ topMargin }) => (topMargin ? 'var(--spacing-small)' : '0')};
`

const Title = styled.h3`
  flex-grow: 1;
`

const Icon = styled.div`
  margin-right: var(--gutter);
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
  title?: React.ReactNode
  topMargin?: boolean
}

const PanelHeader = ({ topMargin, title, icon, actions }: PanelHeaderProps) => {
  return (
    <Wrapper topMargin={topMargin}>
      {icon && <Icon>{icon}</Icon>}
      <Title>{title}</Title>
      <Actions>{actions}</Actions>
    </Wrapper>
  )
}

export default PanelHeader
