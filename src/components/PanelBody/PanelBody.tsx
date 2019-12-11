import React from 'react'
import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars'
import ScrollbarThumb from '../ScrollbarThumb/ScrollbarThumb'

const Wrapper = styled.div<PanelBodyProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > * {
    flex-grow: 1;
  }

  padding: 0
    ${({ noPadding }) =>
      noPadding ? '0' : 'calc(var(--spacing) + var(--half-gutter))'};
`

type PanelBodyProps = {
  children?: React.ReactNode
  noPadding?: boolean
}

const PanelBody = ({ children, noPadding }: PanelBodyProps) => {
  return (
    <Wrapper noPadding={noPadding}>
      <Scrollbars
        autoHide
        renderThumbVertical={ScrollbarThumb}
        renderThumbHorizontal={ScrollbarThumb}
      >
        {children}
      </Scrollbars>
    </Wrapper>
  )
}

export default PanelBody
