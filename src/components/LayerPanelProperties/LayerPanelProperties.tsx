import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import LayerPropertyDimension from '../LayerPropertyDimension/LayerPropertyDimension'
import LayerPropertyColor from '../LayerPropertyColor/LayerPropertyColor'
import ModelColorInterface from '../../types/ModelColorInterface'
import ModelDimensionInterface from '../../types/ModelDimensionInterface'

const Wrapper = styled.div`
  margin-bottom: var(--half-gutter);
  margin-left: 2.3rem;
`

const Items = styled.div``

type LayerPanelPropertiesProps = {
  model: ModelInterface
  children?: React.ReactNode
}

const handleDimensionChange = (dimension: ModelDimensionInterface) => {
  console.log(dimension)
}

const handleColorChange = (color: ModelColorInterface) => {
  console.log(color)
}

const LayerPanelProperties = ({
  children,
  model
}: LayerPanelPropertiesProps) => {
  const { color, dimension } = model

  return (
    <Wrapper>
      <Items>
        <LayerPropertyDimension
          dimension={dimension}
          onChange={handleDimensionChange}
        />
        <LayerPropertyColor color={color} onChange={handleColorChange} />
      </Items>
      <Items>{children}</Items>
    </Wrapper>
  )
}

export default LayerPanelProperties
