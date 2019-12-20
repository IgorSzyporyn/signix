import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;
  }

  & > *:first-child {
    margin-right: var(--spacing);
  }

  & > *:last-child {
    margin-right: 0;
  }
`

type HorizontalFieldContainerProps = {
  children?: React.ReactNode
}

const HorizontalFieldContainer = ({ children }: HorizontalFieldContainerProps) => (
  <Wrapper>{children}</Wrapper>
)

export default HorizontalFieldContainer
