import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import ModelPositionTypes from '../../types/ModelPositionTypes'
import PropertyPositionType from '../PropertyPositionType/PropertyPositionType'
import HorizontalFieldContainer from '../PropertyHorizontalContainer/HorizontalFieldContainer'

const handleYChange = (y: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, top: +y, bottom: +y }
  }

  updateItemInModelStore(newModel)
}

const handleXChange = (x: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, left: +x, right: +x }
  }

  updateItemInModelStore(newModel)
}

const handleTypeChange = (type: ModelPositionTypes, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, type }
  }

  updateItemInModelStore(newModel)
}

type PropertyPositionProps = {
  model: ModelInterface
}

const PropertyPosition = ({ model }: PropertyPositionProps) => {
  const { position } = model

  return (
    <PropertiesPanel title="Position" type="position">
      <PropertyPositionType
        label="Alignment"
        type={position.type}
        onChange={(type: ModelPositionTypes) => handleTypeChange(type, model)}
      />
      <HorizontalFieldContainer>
        <FieldInput
          label="X Offset"
          value={position.left}
          onChange={e => {
            handleXChange(e.target.value, model)
          }}
        />
        <FieldInput
          label="Y Offset"
          value={position.top}
          onChange={e => {
            handleYChange(e.target.value, model)
          }}
        />
      </HorizontalFieldContainer>
    </PropertiesPanel>
  )
}

export default PropertyPosition
