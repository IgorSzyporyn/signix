import React from 'react'
import styled from 'styled-components'
import SizeTypes from '../../types/SizeTypes'

type WrapperProps = {
  size?: SizeTypes
}

const Wrapper = styled.div<WrapperProps>`
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
    linear-gradient(-45deg, #808080 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #808080 75%),
    linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: ${({ size }) =>
    size === 'small' ? '8px 8px' : '20px 20px'};
  background-position: 0 0,
    0
      ${({ size }) =>
        size === 'small' ? '4px, 4px -4px, -4px' : '10px, 10px -10px, -10px'}
      0px;
  background-color: rgba(255, 255, 255, 0.65);
`

type TransparencyBackgroundProps = {
  children?: React.ReactNode
  size?: SizeTypes
}

const TransparencyBackground = ({
  children,
  size,
  ...props
}: TransparencyBackgroundProps) => (
  <Wrapper size={size} {...props}>
    {children}
  </Wrapper>
)

export default TransparencyBackground
