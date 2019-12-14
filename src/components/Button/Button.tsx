import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import getFontSize from '../../utils/getFontSize'
import ActionVariantTypes from '../../types/ActionVariantTypes'

const ButtonWrapper = styled.button<ButtonProps>`
  font-size: ${getFontSize('xsmall')};
  font-weight: 500;
  padding: var(--gutter) var(--spacing-small);
  border-radius: 0.3rem;
  color: var(--color-lighter);
  margin: 0;
  box-sizing: border-box;
  outline: none;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  cursor: pointer;

  ${({ variant }) => {
    let backgroundColor = 'var(--color-dark)'
    let border = '0.1rem solid var(--color-lighter)'
    let color = 'var(--color-lighter)'

    switch (variant) {
      case 'primary':
        backgroundColor = 'var(--color-lightblue)'
        border = '0.1rem solid var(--color-lightblue)'
        color = 'var(--color-white)'
        break
      case 'secondary':
        backgroundColor = 'var(--color-lightblue)'
        border = '0.1rem solid var(--color-lightblue)'
        color = 'var(--color-white)'
        break
      default:
        break
    }

    return `
      background-color: ${backgroundColor};
      border: ${border};
      color: ${color};
    `
  }}

  &[active='true'] {
    background-color: var(--color-lighter);
    color: var(--color-dark);
  }

  & > * {
    display: flex;
    justify-content: center;
  }
`

type ButtonProps = { variant?: ActionVariantTypes } & ButtonHTMLAttributes<
  HTMLButtonElement
>

const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} {...props}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
