import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;

    &:first-child button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-child):not(:last-child) button {
      border-left: 0 none;
      border-radius: 0;
    }

    &:last-child button {
      border-left: 0 none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`

type FieldButtonGroupProps = {
  children?: React.ReactNode
}

const FieldButtonGroup = ({ children }: FieldButtonGroupProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default FieldButtonGroup
