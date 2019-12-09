import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import HorizontalFieldContainer from '../PropertyHorizontalContainer/HorizontalFieldContainer'

const handleWidthChange = (value: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    dimension: { ...model.dimension, width: +value }
  }

  updateItemInModelStore(newModel)
}

const handleHeightChange = (value: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    dimension: { ...model.dimension, height: +value }
  }

  updateItemInModelStore(newModel)
}

const handleDisableChange = (checked: boolean, model: ModelInterface) => {
  const newModel = {
    ...model,
    dimension: { ...model.dimension, disabled: checked }
  }

  updateItemInModelStore(newModel)
}

type PropertyDimensionProps = {
  model: ModelInterface
}

const PropertyDimension = ({ model }: PropertyDimensionProps) => {
  const { dimension } = model

  return (
    <PropertiesPanel title="Dimensions" type="dimension">
      <FieldCheckbox
        title="Disable"
        inline={true}
        checked={dimension.disabled}
        onChange={e => {
          handleDisableChange(e.target.checked, model)
        }}
      />
      <HorizontalFieldContainer>
        <FieldInput
          title="Width"
          type="number"
          value={dimension.width}
          onChange={e => {
            handleWidthChange(e.target.value, model)
          }}
          disabled={dimension.disabled}
        />
        <FieldInput
          title="Height"
          type="number"
          value={dimension.height}
          onChange={e => {
            handleHeightChange(e.target.value, model)
          }}
          disabled={dimension.disabled}
        />
      </HorizontalFieldContainer>
    </PropertiesPanel>
  )
}

export default PropertyDimension
