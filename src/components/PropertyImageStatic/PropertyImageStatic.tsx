import React from 'react'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import FieldImage from '../FieldImage/FieldImage'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type PropertyImageStaticProps = {
  model: ModelInterface
}

const PropertyImageStatic = ({ model }: PropertyImageStaticProps) => {
  const { value } = model

  return (
    <PropertiesPanel title="Image" type="imageStatic">
      <FieldImage
        label="Pick Image"
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

export default PropertyImageStatic
