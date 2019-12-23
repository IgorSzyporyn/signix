import React from 'react'
import styled from 'styled-components'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import Button from '../Button/Button'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import PropertyOptionsOptions from '../PropertyOptionsOptions/PropertyOptionsOptions'

const Buttons = styled.div`
  display: flex;
  margin-top: var(--spacing);
  margin-bottom: calc(1.5 * var(--spacing-large));

  & > :first-child {
    margin-right: var(--gutter);
  }
`

const defaultOption = {
  question: '',
  value: '',
  default: false
}

type PropertyOptionsProps = {
  model: ModelInterface
}

const PropertyOptions = ({ model }: PropertyOptionsProps) => {
  const { options } = model

  return (
    <PropertiesPanel title="Options" type="options">
      <Buttons>
        <Button
          variant="primary"
          onClick={() => {
            const newOptions = [...options]
            const newOption = { ...defaultOption }

            if (newOptions.length === 0) {
              newOption.default = true
            }

            newOptions.unshift(newOption)

            updateItemInModelStore({ id: model.id, options: newOptions })
          }}
        >
          Add New Option
        </Button>
        <Button
          variant="primary"
          disabled={options.length === 0}
          onClick={() => {
            updateItemInModelStore({ id: model.id, options: [] })
          }}
        >
          Remove All Options
        </Button>
      </Buttons>
      <div>
        <PropertyOptionsOptions model={model} />
      </div>
    </PropertiesPanel>
  )
}

export default PropertyOptions
