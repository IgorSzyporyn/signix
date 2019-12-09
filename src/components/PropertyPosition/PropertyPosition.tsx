import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import ModelPositionTypes from '../../types/ModelPositionTypes'
import PropertyPositionType from '../PropertyPositionType/PropertyPositionType'
import HorizontalFieldContainer from '../PropertyHorizontalContainer/HorizontalFieldContainer'

const handleTopChange = (top: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, top: +top }
  }

  updateItemInModelStore(newModel)
}

const handleBottomChange = (bottom: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, bottom: +bottom }
  }

  updateItemInModelStore(newModel)
}

const handleLeftChange = (left: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, left: +left }
  }

  updateItemInModelStore(newModel)
}

const handleRightChange = (right: string, model: ModelInterface) => {
  const newModel = {
    ...model,
    position: { ...model.position, right: +right }
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
      <HorizontalFieldContainer>
        <PropertyPositionType
          title="Alignment"
          type={position.type}
          onChange={(type: ModelPositionTypes) => handleTypeChange(type, model)}
        />
      </HorizontalFieldContainer>
      <HorizontalFieldContainer>
        <FieldInput
          title="Top"
          value={position.top}
          onChange={e => {
            handleTopChange(e.target.value, model)
          }}
        />
        <FieldInput
          title="Bottom"
          value={position.bottom}
          onChange={e => {
            handleBottomChange(e.target.value, model)
          }}
        />
      </HorizontalFieldContainer>
      <HorizontalFieldContainer>
        <FieldInput
          title="Left"
          value={position.left}
          onChange={e => {
            handleLeftChange(e.target.value, model)
          }}
        />
        <FieldInput
          title="Right"
          value={position.right}
          onChange={e => {
            handleRightChange(e.target.value, model)
          }}
        />
      </HorizontalFieldContainer>
    </PropertiesPanel>
  )
}

export default PropertyPosition
