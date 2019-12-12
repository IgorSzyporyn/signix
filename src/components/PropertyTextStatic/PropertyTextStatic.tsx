import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldInput from '../FieldInput/FieldInput'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type PropertyTextStaticProps = {
  model: ModelInterface
}

const PropertyTextStatic = ({ model }: PropertyTextStaticProps) => {
  const { value } = model

  return (
    <PropertiesPanel title="Static Text" type="textStatic">
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

export default PropertyTextStatic
