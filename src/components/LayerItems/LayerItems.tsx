import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import LayerItem from '../LayerItem/LayerItem'

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const createLayerItems = (items: ModelInterface[]) => {
  let children: React.ReactNode = []

  if (items && items.length) {
    children = items.map(item => {
      return (
        <LayerItem
          key={`layer-item-${item.id}}`}
          model={item as ModelInterface}
        />
      )
    })
  }

  return children
}

type LayerItemsProps = {
  items: ModelInterface[]
}

const LayerItems = ({ items }: LayerItemsProps) => {
  return <Wrapper>{createLayerItems(items)}</Wrapper>
}

export default LayerItems
