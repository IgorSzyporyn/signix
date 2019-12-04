import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'

const HorizontalFieldContainer = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;
  }

  & > *:first-child {
    margin-right: var(--gutter);
  }
`

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

type LayerPropertyDimensionProps = {
  model: ModelInterface
}

const LayerPropertyDimension = ({ model }: LayerPropertyDimensionProps) => {
  const { dimension } = model

  return (
    <PropertiesPanel id={`${model.id!}-dimension`} title="Dimensions">
      <FieldCheckbox
        title="Disable"
        inline={true}
        onChange={e => {
          handleDisableChange(e.target.checked, model)
        }}
      />
      <HorizontalFieldContainer>
        <FieldInput
          title="Width"
          value={dimension!.width}
          onChange={e => {
            handleWidthChange(e.target.value, model)
          }}
          disabled={dimension!.disabled}
        />
        <FieldInput
          title="Height"
          value={dimension!.height}
          onChange={e => {
            handleHeightChange(e.target.value, model)
          }}
          disabled={dimension!.disabled}
        />
      </HorizontalFieldContainer>
    </PropertiesPanel>
  )
}

export default LayerPropertyDimension
