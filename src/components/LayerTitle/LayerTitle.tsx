import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.h4`
  margin: 0;
`
type LayerTitleProps = {
  model: ModelInterface
}

const LayerTitle = ({ model }: LayerTitleProps) => {
  return (
    <Wrapper>
      <Title>{model.name}</Title>
    </Wrapper>
  )
}

export default LayerTitle
