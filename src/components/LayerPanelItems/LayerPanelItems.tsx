import React, { useMemo } from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import { uniqueId } from '../../utils/utilities'
import LayerItem from '../LayerItem/LayerItem'

const Wrapper = styled.div``

const createLayerItems = (model: ModelInterface) => {
  let items: React.ReactNode = []

  if (model.items && model.items.length) {
    items = model.items.map(item => {
      return (
        <LayerItem
          key={`layer-item-${model.name}-${uniqueId()}`}
          model={item}
        />
      )
    })
  }

  return items
}

type LayerPanelGroupProps = {
  model: ModelInterface
}

const LayerPanelItems = ({ model }: LayerPanelGroupProps) => {
  const items = useMemo(() => createLayerItems(model), [model])

  return <Wrapper>{items}</Wrapper>
}

export default LayerPanelItems
