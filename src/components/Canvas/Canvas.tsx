import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ModelStore from '../../stores/ModelStore'
import CanvasItem from '../CanvasItem/CanvasItem'
import TransparencyBackground from '../TransparencyBackground/TransparencyBackground'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import updateActiveModelInAppStore from '../../stores/appStore/updateActiveModelInAppStore'

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
        updateActiveModelInAppStore(undefined)
      }}
    >
      <TransparencyBackground>
        <CanvasItem model={model} />
      </TransparencyBackground>
    </Wrapper>
  )
}

export default Canvas
