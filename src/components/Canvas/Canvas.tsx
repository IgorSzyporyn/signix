import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateActiveInModelStore from '../../stores/model/updateActiveInModelStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import CanvasItem from '../CanvasItem/CanvasItem'
import TransparencyBackground from '../TransparencyBackground/TransparencyBackground'

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
      <TransparencyBackground>
        <CanvasItem model={model} />
      </TransparencyBackground>
    </Wrapper>
  )
}

export default Canvas
