import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import CanvasItem from '../CanvasItem/CanvasItem'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

type CanvasProps = {
  model: ModelInterface
  active?: string
}

const Canvas = ({ model, active }: CanvasProps) => {
  console.log('rendering canvas - active is ', active)
  return (
    <Wrapper>
      <CanvasItem model={model} />
    </Wrapper>
  )
}

export default Canvas
