import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import LayerItems from '../LayerItems/LayerItems'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type LayerPropertyItems = {
  model: ModelInterface
}

const LayerPropertyItems = ({ model }: LayerPropertyItems) => {
  return (
    <PropertiesPanel id={`${model.id!}-items`} title="Items">
      <LayerItems items={model.items as ModelInterface[]} />
    </PropertiesPanel>
  )
}

export default LayerPropertyItems
