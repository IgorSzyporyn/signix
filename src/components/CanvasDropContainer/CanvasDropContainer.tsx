import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: background-color 300ms ease-in-out, opacity 300ms ease-in-out;
  border: 2px dashed var(--drag-drop-ready);
  box-sizing: border-box;
  opacity: 0;

  ${({ isActive }: DropContainerProps) => {
    if (isActive) {
      return `border: 2px solid var(--drag-drop-ready);`
    } else {
      return null
    }
  }}
  ${({ canDrop }: DropContainerProps) => {
    if (canDrop) {
      return `opacity: 1;`
    } else {
      return null
    }
  }}
`

type DropContainerProps = {
  isActive: boolean
  canDrop: boolean
}

const CanvasDropContainer = React.forwardRef<
  HTMLDivElement,
  DropContainerProps
>((props, ref) => <Wrapper ref={ref} {...props} />)

export default CanvasDropContainer
