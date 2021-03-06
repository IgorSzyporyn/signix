import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div<CanvasDropContainerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: background-color 300ms ease-in-out, opacity 300ms ease-in-out;
  outline: 0.1rem dashed var(--color-drag-drop-ready);
  opacity: 0;

  ${({ isActive }) => {
    if (isActive) {
      return `outline: 0.1rem solid var(--color-drag-drop-over);`
    } else {
      return null
    }
  }}

  ${({ canDrop }) => {
    if (canDrop) {
      return `opacity: 1;`
    } else {
      return null
    }
  }}

${({ level }) => {
  if (level) {
    return `z-index: ${level};`
  } else {
    return null
  }
}}
`

type CanvasDropContainerProps = {
  hidden?: boolean
  isActive: boolean
  canDrop: boolean
  level?: number
}

const CanvasDropContainer = React.forwardRef<HTMLDivElement, CanvasDropContainerProps>(
  (props, ref) => <Wrapper ref={ref} {...props} />
)

export default CanvasDropContainer
