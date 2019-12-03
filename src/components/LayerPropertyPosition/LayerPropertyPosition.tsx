import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

const HorizontalFieldContainer = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;
  }

  & > *:first-child {
    margin-right: var(--gutter);
  }
`

const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log('changing')
}

const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log('changing')
}

const handleDisableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log('changing')
}

type LayerPropertyPositionProps = {
  model: ModelInterface
}

const LayerPropertyPosition = ({ model }: LayerPropertyPositionProps) => {
  const { dimension } = model

  return (
    <PropertiesPanel id={`${model.id!}-position`} title="Position">
      <FieldCheckbox
        title="Disable"
        inline={true}
        onChange={handleDisableChange}
      />
      <HorizontalFieldContainer>
        <FieldInput
          title="Width"
          value={dimension!.width}
          onChange={handleWidthChange}
        />
        <FieldInput
          title="Height"
          value={dimension!.height}
          onChange={handleHeightChange}
        />
      </HorizontalFieldContainer>
    </PropertiesPanel>
  )
}

export default LayerPropertyPosition
