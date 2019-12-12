import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type PropertyTextDynamicProps = {
  model: ModelInterface
}

const PropertyTextDynamic = ({ model }: PropertyTextDynamicProps) => {
  const { value } = model

  return (
    <PropertiesPanel title="Dynamic Text" type="textDynamic">
      <FieldInput
        title="Text Value"
        value={value}
        onChange={e => {
          updateItemInModelStore({
            id: model.id,
            value: e.currentTarget.value
          })
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyTextDynamic
