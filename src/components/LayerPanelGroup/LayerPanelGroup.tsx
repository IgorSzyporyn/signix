import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon'
import ModelInterface from '../../types/ModelInterface'
import { uniqueId } from '../../utils/utilities'
import LayerItem from '../LayerItem/LayerItem'

const GroupWrapper = styled.div`
  position: relative;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--half-gutter);
  margin-left: 2rem;
`

const Title = styled.h4`
  margin: 0 0 0 var(--half-gutter);
`

const Items = styled.div`
  margin-left: 4rem;
`

const ItemsBar = styled.div`
  position: absolute;
  top: 2.4rem;
  bottom: 0;
  right: 0;
  left: 1rem;
  width: 0.3rem;
  margin: 0 1.4rem;
  background-color: var(--darkergray);
`

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

const LayerPanelGroup = ({ model }: LayerPanelGroupProps) => {
  const items = useMemo(() => createLayerItems(model), [model])
  const [expanded, setExpanded] = useState(true)

  return (
    <GroupWrapper>
      <Heading
        onClick={() => {
          setExpanded(!expanded)
        }}
      >
        <ChevronIcon width={10} height={10} rotate={expanded ? 90 : 0} />
        <Title>Items</Title>
      </Heading>
      <Items hidden={!expanded}>{items}</Items>
      <ItemsBar />
    </GroupWrapper>
  )
}

export default LayerPanelGroup
