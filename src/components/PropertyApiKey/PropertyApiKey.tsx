import { useStore } from 'laco-react'
import React from 'react'
import QueryDataStore from '../../stores/QueryDataStore'
import FieldOptionsOptionType from '../../types/FieldOptionsOptionType'
import ModelInterface from '../../types/ModelInterface'
import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'
import FieldOptions from '../FieldOptions/FieldOptions'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'

type PropertyApiKeyQueryProps = {
  model: ModelInterface
}

const PropertyApiKey = ({ model }: PropertyApiKeyQueryProps) => {
  const { value } = model

  const { dataKeys }: QueryDataStoreInterface = useStore(QueryDataStore)

  return (
    <PropertiesPanel title="API Connection Key" type="apiKey">
      <FieldOptions
        label="Pick API key for value"
        value={value}
        options={dataKeys as FieldOptionsOptionType[]}
        onChange={e => {}}
      />
    </PropertiesPanel>
  )
}

export default PropertyApiKey
