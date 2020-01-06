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
        onSelectChange={response => {
          if (response) {
            const values: Partial<ModelInterface> = {
              id: model.id,
              value: response.path
            }

            if (response.dimensions && model.dimension.disabled) {
              values.dimension = {
                ...model.dimension,
                disabled: false,
                height: response.dimensions.height,
                width: response.dimensions.width
              }
            }

            updateItemInModelStore(values)
          }
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyImageStatic
