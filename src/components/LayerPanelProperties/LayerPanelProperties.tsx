import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import LayerPropertyColor from '../LayerPropertyColor/LayerPropertyColor'
import LayerPropertyDimension from '../LayerPropertyDimension/LayerPropertyDimension'
import LayerPropertyItems from '../LayerPropertyItems/LayerPropertyItems'
import LayerPropertyPosition from '../LayerPropertyPosition/LayerPropertyPosition'

const Wrapper = styled.div`
  margin-bottom: var(--half-gutter);
  margin-left: var(--spacing);
`

const Items = styled.div`
  & > div {
    margin-bottom: var(--half-gutter);
  }
`

type LayerPanelPropertiesProps = {
  model: ModelInterface
  children?: React.ReactNode
}

const LayerPanelProperties = ({
  children,
  model
}: LayerPanelPropertiesProps) => {
  return (
    <Wrapper>
      <Items>
        <LayerPropertyDimension model={model} />
        <LayerPropertyColor model={model} />
        <LayerPropertyPosition model={model} />
      </Items>
      <Items>{children}</Items>
      {model.items && model.items.length > 0 && (
        <Items>
          <LayerPropertyItems model={model} />
        </Items>
      )}
    </Wrapper>
  )
}

export default LayerPanelProperties
