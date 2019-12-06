import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type LayerPropertyColorProps = {
  model: ModelInterface
}

const LayerPropertyColor = ({ model }: LayerPropertyColorProps) => {
  return (
    <PropertiesPanel id={`${model.id!}-color`} title="Color"></PropertiesPanel>
  )
}

export default LayerPropertyColor
