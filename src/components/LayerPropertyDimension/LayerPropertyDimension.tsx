import React from 'react'
import styled from 'styled-components'
import ModelDimensionInterface from '../../types/ModelDimensionInterface'

const Wrapper = styled.div``

type LayerPropertyDimensionProps = {
  dimension?: ModelDimensionInterface
  onChange?: (dimension: ModelDimensionInterface) => void
}

const LayerPropertyDimension = ({ dimension }: LayerPropertyDimensionProps) => (
  <Wrapper>
    <h5 style={{ margin: 0 }}>Dimensions</h5>
    <div>
      <label>Disabled</label>
      <input type="checkbox" />
    </div>
    <div>LayerPropertyDimension</div>
    <div>LayerPropertyDimension</div>
  </Wrapper>
)

export default LayerPropertyDimension
