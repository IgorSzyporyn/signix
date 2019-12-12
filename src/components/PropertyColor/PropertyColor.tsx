import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import FieldColor from '../FieldColor/FieldColor'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'

type PropertyColorProps = {
  model: ModelInterface
}

const PropertyColor = ({ model }: PropertyColorProps) => {
  const { color } = model

  return (
    <PropertiesPanel title="Colors" type="color">
      <FieldColor
        labelStyle={{ minWidth: '7rem' }}
        inline
        title="Background"
        color={color.background}
        onColorChange={_color => {
          updateItemInModelStore({
            id: model.id,
            color: { ...color, background: _color }
          })
        }}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '7rem' }}
        title="Foreground"
        color={color.foreground}
        onColorChange={_color => {
          updateItemInModelStore({
            id: model.id,
            color: { ...color, foreground: _color }
          })
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyColor
