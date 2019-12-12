import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import CanvasItem from '../CanvasItem/CanvasItem'

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark);
  width: 100%;
`

const Canvas = () => {
  const { model }: ModelStoreInterface = useStore(ModelStore)

  return (
    <Wrapper
      onClick={() => {
        updateActiveInModelStore(undefined)
      }}
    >
      <CanvasItem model={model} />
    </Wrapper>
  )
}

export default Canvas
