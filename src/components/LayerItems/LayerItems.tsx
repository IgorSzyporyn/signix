import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import LayerItem from '../LayerItem/LayerItem'

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const createLayerItems = (
  items: ModelInterface[],
  moveLayer: (dragId: string, hoverId: string) => void
) => {
  let children: React.ReactNode = []

  if (items && items.length) {
    children = items.map(item => (
      <LayerItem key={`layer-item-${item.id}}`} model={item} moveLayer={moveLayer} />
    ))
  }

  return children
}

type LayerItemsProps = {
  items: ModelInterface[]
  moveLayer: (dragId: string, hoverId: string) => void
}

const LayerItems = ({ items, moveLayer }: LayerItemsProps) => {
  const layerItems = createLayerItems(items, moveLayer)

  return <Wrapper>{layerItems}</Wrapper>
}

export default LayerItems
