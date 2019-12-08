import React from 'react'
import styled from 'styled-components'
import SizeTypes from '../../types/SizeTypes'
import getIconStyle from '../../utils/getIconStyle'

type WrapperProps = {
  interactive?: boolean
  hoverColor?: string
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;

  ${({ interactive, hoverColor }) => {
    if (interactive) {
      return `
        cursor: pointer;
        &: hover {
          color: ${hoverColor || 'var(--color-lightblue)'};
        }
      `
    } else {
      return null
    }
  }}
`

type MUIconRenderProps = {
  style: React.CSSProperties
}

type MUIconProps = {
  title?: string
  interactive?: boolean
  hoverColor?: string
  style?: React.CSSProperties
  size?: SizeTypes
  render: (props: MUIconRenderProps) => React.ReactNode
}

const MUIcon = ({
  title,
  interactive,
  hoverColor,
  size,
  style,
  render,
  ...props
}: MUIconProps) => {
  const iconStyle = getIconStyle({ size, style })

  return (
    <Wrapper title={title} hoverColor={hoverColor} interactive={interactive}>
      {render({ style: iconStyle, ...props })}
    </Wrapper>
  )
}

export default MUIcon
