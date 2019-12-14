import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  background-color: var(--color-dark);
  z-index: 1;
`

type ModalInnerProps = {
  noPadding?: boolean
}

const ModalInner = styled.div<ModalInnerProps>`
  z-index: 2;
  background-color: var(--color-black);
  border-radius: 0.5rem;
  max-width: 80%;
  max-height: 80%;
  padding: ${({ noPadding }) => (noPadding ? '0' : 'var(--spacing)')};
`

type ModalProps = {
  children?: React.ReactNode
  noPadding?: boolean
}

const Modal = ({ children, noPadding }: ModalProps) => {
  return (
    <Wrapper>
      <ModalBackground />
      <ModalInner noPadding={noPadding}>{children}</ModalInner>
    </Wrapper>
  )
}

export default Modal
