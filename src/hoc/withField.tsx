import React from 'react'
import styled from 'styled-components'
import { uniqueId } from '../utils/utilities'
import getFontSize from '../utils/getFontSize'

type WrapperProps = {
  disabled?: boolean
  inline?: boolean
  nomargin?: string
}

const Wrapper = styled.div<WrapperProps>`
  margin-bottom: ${({ nomargin }) => `${nomargin ? '0' : 'var(--spacing)'}`};

  ${({ disabled }) => {
    if (disabled) {
      return `opacity: 0.4;`
    } else {
      return ``
    }
  }}

  & > label {
    ${({ inline }) => {
      if (inline) {
        return `
          display: flex;
          align-items: center;

          & > div:first-of-type {
            margin-right: var(--gutter);
          }
        `
      } else {
        return `
          & > div:first-of-type {
            margin-bottom: var(--half-gutter);
          }
        `
      }
    }}
  }

  & input,
  .FieldInput {
    min-height: var(--spacing-large);
    font-size: ${getFontSize('xsmall')};
    padding: 1.2rem;
    border-radius: 0.3rem;
    border: 0.1rem solid var(--color-lighter);
    background-color: var(--color-dark);
    color: var(--color-lighter);
    margin: 0;
    box-sizing: border-box;
    outline: none;

    &.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-color: transparent;
    }
  }

  & input[type='number'],
  & input[type='text'] {
    width: 100%;
  }

  & input[type='checkbox'] {
    padding: 0;
  }

  & button {
    min-height: var(--spacing-large);
    font-size: ${getFontSize('xsmall')};
    padding: var(--gutter) var(--gutter);
    border-radius: 0.3rem;
    border: 0.1rem solid var(--color-lighter);
    background-color: var(--color-dark);
    color: var(--color-lighter);
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    outline: none;

    &[active='true'] {
      background-color: var(--color-lighter);
      color: var(--color-dark);
    }

    & > * {
      display: flex;
      justify-content: center;
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
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
  rootStyle?: React.CSSProperties
  active?: 'true' | 'false'
  disabled?: boolean
  hidden?: boolean
  label?: string
  name?: string
  id?: string
  inline?: boolean
  nomargin?: string
  title?: string
}

const withField = <P extends object>(Component: React.ComponentType<P>) =>
  class WithFieldHOC extends React.Component<P & WithFieldProps> {
    render() {
      const { labelStyle, rootStyle, nomargin, id, name, label, inline, ...rest } = this.props
      const safeId = uniqueId()

      const title = rest.title || label || ''

      return (
        <Wrapper
          nomargin={nomargin}
          inline={inline}
          disabled={rest.disabled}
          hidden={rest.hidden}
          title={title}
          style={rootStyle || {}}
        >
          {label ? (
            <Label htmlFor={id || safeId}>
              <Title style={labelStyle || {}}>{label}</Title>
              <Component id={id || safeId} name={name || safeId} {...(rest as P)} />
            </Label>
          ) : (
            <Component id={id || safeId} name={name || safeId} {...(rest as P)} />
          )}
        </Wrapper>
      )
    }
  }

export default withField
