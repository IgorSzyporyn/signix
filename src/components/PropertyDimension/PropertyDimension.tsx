import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import HorizontalFieldContainer from '../PropertyHorizontalContainer/HorizontalFieldContainer'

type PropertyDimensionProps = {
  model: ModelInterface
  disallowDisable?: boolean
}

const PropertyDimension = ({ model, disallowDisable }: PropertyDimensionProps) => {
  const { dimension } = model

  return (
    <PropertiesPanel title="Dimensions" type="dimension">
      {disallowDisable !== true && (
        <FieldCheckbox
          label="Disable"
          inline={true}
          checked={dimension.disabled}
          onChange={e => {
            updateItemInModelStore({
              ...model,
              dimension: { ...model.dimension, disabled: e.target.checked }
            })
          }}
        />
      )}
      <HorizontalFieldContainer>
        <FieldInput
          label="Width"
          type="number"
          value={dimension.width}
          onChange={e => {
            updateItemInModelStore({
              ...model,
              dimension: { ...model.dimension, width: +e.target.value }
            })
          }}
          disabled={dimension.disabled}
        />
        <FieldInput
          label="Height"
          type="number"
          value={dimension.height}
          onChange={e => {
            updateItemInModelStore({
              ...model,
              dimension: { ...model.dimension, height: +e.target.value }
            })
          }}
          disabled={dimension.disabled}
        />
      </HorizontalFieldContainer>
    </PropertiesPanel>
  )
}

export default PropertyDimension
