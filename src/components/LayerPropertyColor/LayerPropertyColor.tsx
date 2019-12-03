import React from 'react'
import styled from 'styled-components'
import ModelColorInterface from '../../types/ModelColorInterface'

const Wrapper = styled.div``

type LayerPropertyColorProps = {
  color?: ModelColorInterface
  onChange?: (color: ModelColorInterface) => void
}

const LayerPropertyColor = ({ color }: LayerPropertyColorProps) => (
  <Wrapper>
    <div>LayerPropertyColor</div>
  </Wrapper>
)

export default LayerPropertyColor
