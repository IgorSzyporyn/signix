import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import FieldSlider from '../FieldSlider/FieldSlider'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'

type PropertyScaleProps = {
  model: ModelInterface
}

const PropertyScale = ({ model }: PropertyScaleProps) => {
  return (
    <PropertiesPanel title="Scale" type="scale">
      <FieldSlider
        value={model.scale}
        onChange={e => {
          const scale = +e.currentTarget.value

          updateItemInModelStore({
            id: model.id,
            scale
          })
        }}
        onSliderChange={scale => {
          updateItemInModelStore({
            id: model.id,
            scale
          })
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyScale
