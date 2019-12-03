import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import CanvasItem from '../CanvasItem/CanvasItem'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Canvas = () => {
  const { model }: ModelStoreInterface = useStore(ModelStore)

  return (
    <Wrapper>
      <CanvasItem model={model} />
    </Wrapper>
  )
}

export default Canvas
