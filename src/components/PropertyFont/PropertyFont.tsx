import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import FieldOptions from '../FieldOptions/FieldOptions'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import FieldInput from '../FieldInput/FieldInput'

type PropertyFontProps = {
  model: ModelInterface
}

const PropertyFont = ({ model }: PropertyFontProps) => {
  const { font } = model

  return (
    <PropertiesPanel title="Font" type="font">
      <FieldOptions
        label="Font Family"
        value={font.type}
        options={['Arial', 'Roboto', 'Times New Roman']}
        onSelectChange={(type = '') => {
          updateItemInModelStore({ id: model.id, font: { ...model.font, type } })
        }}
      />
      <FieldInput
        label="Font Size"
        type="number"
        value={font.size}
        onChange={e => {
          const size = +e.currentTarget.value
          updateItemInModelStore({ id: model.id, font: { ...model.font, size } })
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyFont
