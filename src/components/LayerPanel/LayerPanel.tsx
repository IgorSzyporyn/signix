import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import MinusCircleIcon from '../../icons/MinusCircleIcon/MinusCircleIcon'
import PlusCircleIcon from '../../icons/PlusCircleIcon/PlusCircleIcon'
import getItemFromLayerStoreById from '../../stores/layer/getItemFromLayerStoreById'
import updateItemInLayerStore from '../../stores/layer/updateItemInLayerStore'
import LayerStore from '../../stores/LayerStore'
import ModelInterface from '../../types/ModelInterface'
import LayerPanelProperties from '../LayerPanelProperties/LayerPanelProperties'
import LayerPanelTitle from '../LayerPanelTitle/LayerPanelTitle'

type LayerPanelProps = {
  children?: React.ReactNode
  model: ModelInterface
}

const Wrapper = styled.div``

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--half-gutter);
`

const Title = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`

const Body = styled.div``

const LayerPanel = ({ model, children }: LayerPanelProps) => {
  useStore(LayerStore)

  const expanded = getItemFromLayerStoreById(model.id!)

  const iconProps = {
    width: '1.2rem',
    height: '1.2rem'
  }

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          updateItemInLayerStore(!expanded, model.id!)
        }}
      >
        {expanded ? (
          <MinusCircleIcon {...iconProps} />
        ) : (
          <PlusCircleIcon {...iconProps} />
        )}
        <Title>
          <LayerPanelTitle model={model} />
        </Title>
      </Heading>
      <Body hidden={!expanded}>
        <LayerPanelProperties model={model}>{children}</LayerPanelProperties>
      </Body>
    </Wrapper>
  )
}

export default LayerPanel
