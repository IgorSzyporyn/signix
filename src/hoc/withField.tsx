import React from 'react'
import styled from 'styled-components'
import { uniqueId } from '../utils/utilities'

type WrapperProps = {
  disabled?: boolean
  inline?: boolean
}

const Wrapper = styled.div`
  margin-bottom: var(--half-gutter);

  ${({ disabled }: WrapperProps) => {
    if (disabled) {
      return `opacity: 0.4;`
    } else {
      return ``
    }
  }}

  & > label {
    ${({ inline }: WrapperProps) => {
      if (inline) {
        return `
          display: flex;

          & > div:first-of-type {
            margin-right: var(--quarter-gutter);
          }
        `
      } else {
        return `
          & > div:first-of-type {
            margin-bottom: var(--quarter-gutter);
          }
        `
      }
    }}
  }

  & input {
    font-size: 1.2rem;
    padding: var(--quarter-gutter) var(--half-gutter);
    border-radius: 0.3rem;
    border: 1px solid var(--color-light);
    margin: 0;
    box-sizing: border-box;
  }

  & input[type='number'],
  & input[type='text'] {
    width: 100%;
  }

  & input[type='checkbox'] {
    padding: 0;
  }

  & button {
    font-size: 1.2rem;
    padding: var(--quarter-gutter) var(--half-gutter);
    border-radius: 0.3rem;
    border: 1px solid var(--color-light);
    margin: 0;
    box-sizing: border-box;
    width: 100%;

    &[active='true'] {
      background-color: var(--color-blue);
    }
  }
`

const Label = styled.label`
  display: block;
`

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`

export interface WithFieldProps {
  active?: 'true' | 'false'
  disabled?: boolean
  hidden?: boolean
  title?: string
  name?: string
  id?: string
  inline?: boolean
}

const withField = <P extends object>(Component: React.ComponentType<P>) =>
  class WithFieldHOC extends React.Component<P & WithFieldProps> {
    render() {
      const { id, name, title, inline, ...rest } = this.props
      const safeId = uniqueId()

      return (
        <Wrapper inline={inline} disabled={rest.disabled} hidden={rest.hidden}>
          {title ? (
            <Label htmlFor={id || safeId}>
              <Title>{title}</Title>
              <Component
                id={id || safeId}
                name={id || safeId}
                {...(rest as P)}
              />
            </Label>
          ) : (
            <Component id={id || safeId} name={id || safeId} {...(rest as P)} />
          )}
        </Wrapper>
      )
    }
  }

export default withField
