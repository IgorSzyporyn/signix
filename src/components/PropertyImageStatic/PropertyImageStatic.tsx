import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldImagePicker from '../FieldImagePicker/FieldImagePicker'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type PropertyImageStaticProps = {
  model: ModelInterface
}

const PropertyImageStatic = ({ model }: PropertyImageStaticProps) => {
  const { value } = model

  return (
    <PropertiesPanel title="Image" type="imageStatic">
      <FieldImagePicker
        label="Pick Image"
        value={value}
        onSelectChange={value => {
          updateItemInModelStore({
            id: model.id,
            value
          })
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyImageStatic
