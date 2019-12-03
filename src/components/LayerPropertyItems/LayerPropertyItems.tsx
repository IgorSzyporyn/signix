import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import LayerPanelItems from '../LayerPanelItems/LayerPanelItems'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type LayerPropertyItems = {
  model: ModelInterface
}

const LayerPropertyItems = ({ model }: LayerPropertyItems) => {
  return (
    <PropertiesPanel id={`${model.id!}-items`} title="Items">
      <LayerPanelItems model={model} />
    </PropertiesPanel>
  )
}

export default LayerPropertyItems
