import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import ModelPositionTypes from '../../types/ModelPositionTypes'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldImage from '../FieldImage/FieldImage'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import PropertyPositionType from '../PropertyPositionType/PropertyPositionType'

const handlePositionChange = (
  position: ModelPositionTypes,
  model: ModelInterface
) => {
  const newModel = {
    ...model,
    background: { ...model.background, position }
  }

  updateItemInModelStore(newModel)
}

type PropertyBackgroundProps = {
  model: ModelInterface
}

const PropertyBackground = ({ model }: PropertyBackgroundProps) => {
  const { background } = model
  const { disabled, image } = background || {}

  return (
    <PropertiesPanel title="Background Image" type="backgroundImage">
      {background && (
        <>
          <FieldCheckbox
            onChange={e => {
              const disabled = e.target.checked
              updateItemInModelStore({
                ...model,
                background: {
                  ...model.background!,
                  disabled
                }
              })
            }}
            inline
            title="Disable"
            checked={disabled}
          />
          <PropertyPositionType
            center
            disabled={disabled}
            title="Alignment"
            type={background.position}
            onChange={(position: ModelPositionTypes) =>
              handlePositionChange(position, model)
            }
          />
          <FieldImage
            disabled={disabled}
            title="Image"
            value={image}
            onChange={e => {
              updateItemInModelStore({
                ...model,
                background: {
                  ...model.background!,
                  image: e.currentTarget.value
                }
              })
            }}
          />
        </>
      )}
    </PropertiesPanel>
  )
}

export default PropertyBackground