import React from 'react'
import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars'
import ScrollbarThumb from '../ScrollbarThumb/ScrollbarThumb'

const Wrapper = styled.main<PanelBodyProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > * {
    flex-grow: 1;
  }
`

type PanelBodyProps = {
  children?: React.ReactNode
}

const PanelBody = ({ children }: PanelBodyProps) => {
  return (
    <Wrapper>
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
