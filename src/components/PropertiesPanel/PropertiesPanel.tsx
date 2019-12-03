import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon'
import getItemFromLayerStoreById from '../../stores/layer/getItemFromLayerStoreById'
import updateItemInLayerStore from '../../stores/layer/updateItemInLayerStore'
import LayerStore from '../../stores/LayerStore'

const Wrapper = styled.div``

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--half-gutter);
`

const Title = styled.h5`
  margin: 0 0 0 var(--half-gutter);
`

const Body = styled.div`
  position: relative;
  margin-left: var(--spacing);
`

type PropertiesPanelProps = {
  id: string
  title: string
  children?: React.ReactNode
}

const PropertiesPanel = ({ title, children, id }: PropertiesPanelProps) => {
  useStore(LayerStore)

  const expanded = getItemFromLayerStoreById(id)

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          updateItemInLayerStore(!expanded, id!)
        }}
      >
        <ChevronIcon width="1rem" height="1rem" rotate={expanded ? 90 : 0} />
        <Title>{title}</Title>
      </Heading>
      <Body hidden={!expanded}>{children}</Body>
    </Wrapper>
  )
}

export default PropertiesPanel