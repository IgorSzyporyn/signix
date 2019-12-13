import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  min-height: 100%;
  background-color: var(--color-darker);
  display: flex;
  flex-direction: column;
`

type PanelProps = {
  children?: React.ReactNode
}

const Panel = ({ children }: PanelProps) => <Wrapper>{children}</Wrapper>

export default Panel
