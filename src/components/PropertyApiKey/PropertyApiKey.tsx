import { useStore } from 'laco-react'
import React, { useEffect, useState } from 'react'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import ApiQueryStore from '../../stores/ApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ApiEnumerationInterface from '../../types/ApiEnumerationInterface'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiQueryStoreModelInterface from '../../types/ApiQueryStoreModelInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import ModelCoreTypes from '../../types/ModelCoreTypes'
import ModelInterface from '../../types/ModelInterface'
import apiFixLayer from '../../utils/apiFixLayer'
import apiLayerErrorsContainsBadApiKey from '../../utils/apiLayerErrorsContainsBadApiKey'
import apiValidateLayers from '../../utils/apiValidateLayers'
import FieldOptions from '../FieldOptions/FieldOptions'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import PropertyApiKeyConfirm from '../PropertyApiKeyConfirm/PropertyApiKeyConfirm'
import PropertyApiKeyEnumerations from '../PropertyApiKeyEnumerations/PropertyApiKeyEnumerations'
import PropertyApiKeyError from '../PropertyApiKeyError/PropertyApiKeyError'
import PropertyApiKeyTitle from '../PropertyApiKeyTitle/PropertyApiKeyTitle'

const createEnum = (
  dataStoreModel: ApiQueryStoreModelInterface,
  type: ModelCoreTypes,
  value?: string
) => {
  let enumeration: ApiEnumerationInterface[] = []

  if (value) {
    const enumerationKeys = dataStoreModel[value]
    if (Array.isArray(enumerationKeys)) {
      enumeration = enumerationKeys.map(key => ({
        type,
        key,
        value: ''
      }))
    }
  }

  return enumeration
}

type PropertyApiKeyEnumerationState = {
  confirmChange: boolean
  confirmChangeType: 'proceed' | 'cancel' | null
  storedEnumeration: ApiEnumerationInterface[]
  storedValue: string
  _stupidlyCreatedIdToForceRender: number
}

type PropertyApiKeyQueryProps = {
  type: ModelCoreTypes
  model: ModelInterface
}

const PropertyApiKey = ({ type, model }: PropertyApiKeyQueryProps) => {
  const errorStore: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)
  const { enabled: apiEnabled }: ApiStoreInterface = useStore(ApiStore)
  const {
    dataKeys,
    model: dataStoreModel,
    valid: apiValid,
    tested: apiTested
  }: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const [enumerationState, setEnumerationState] = useState<PropertyApiKeyEnumerationState>({
    confirmChangeType: null,
    confirmChange: false,
    storedEnumeration: model.enumeration,
    storedValue: model.value || '',
    _stupidlyCreatedIdToForceRender: 0
  })

  useEffect(() => {
    if (enumerationState.confirmChangeType !== null) {
      const {
        confirmChangeType,
        storedEnumeration,
        storedValue,
        _stupidlyCreatedIdToForceRender
      } = enumerationState

      if (confirmChangeType === 'proceed') {
        updateItemInModelStore({
          ...model,
          enumeration: storedEnumeration,
          value: storedValue
        })
        setEnumerationState({
          ...enumerationState,
          confirmChangeType: null,
          confirmChange: false
        })
        apiValidateLayers()
      } else if (confirmChangeType === 'cancel') {
        setEnumerationState({
          ...enumerationState,
          confirmChangeType: null,
          confirmChange: false,
          storedEnumeration: model.enumeration,
          storedValue: model.value || '',
          _stupidlyCreatedIdToForceRender: _stupidlyCreatedIdToForceRender + 1
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enumerationState.confirmChangeType])

  const errors = errorStore.errors[model.id!] || []
  const apiErrors = !apiEnabled || !apiValid || !apiTested
  const layerErrors = errors.length > 0
  const hasInvalidApiKey = apiLayerErrorsContainsBadApiKey(errors)

  return (
    <PropertiesPanel
      title={<PropertyApiKeyTitle hasError={apiErrors || layerErrors} />}
      type="apiKey"
    >
      <PropertyApiKeyConfirm
        hidden={!enumerationState.confirmChange}
        onProceed={() => {
          setEnumerationState({
            ...enumerationState,
            confirmChangeType: 'proceed'
          })
        }}
        onCancel={() => {
          setEnumerationState({
            ...enumerationState,
            confirmChangeType: 'cancel'
          })
        }}
      />
      <PropertyApiKeyError
        hidden={enumerationState.confirmChange}
        errors={errors}
        layerErrors={layerErrors}
        apiErrors={apiErrors}
        onSyncClick={() => {
          apiFixLayer(model.id!)
        }}
      />
      <FieldOptions
        id={`${enumerationState._stupidlyCreatedIdToForceRender}`}
        hidden={enumerationState.confirmChange || apiErrors}
        label="Select API key"
        value={hasInvalidApiKey ? '' : model.value}
        options={dataKeys}
        onSelectChange={value => {
          const enumeration = createEnum(dataStoreModel, type, value)

          if (model.enumeration.length > 0) {
            // UseState will invoke confirm key and UseEffect will
            // run updateItemInModelStore and apiValidateLayers
            setEnumerationState({
              ...enumerationState,
              confirmChange: true,
              storedEnumeration: enumeration,
              storedValue: value || ''
            })
          } else {
            updateItemInModelStore({ ...model, enumeration, value })
            apiValidateLayers()
          }
        }}
      />
      <PropertyApiKeyEnumerations
        hidden={enumerationState.confirmChange || apiErrors}
        layerErrors={layerErrors}
        apiErrors={apiErrors}
        enumeration={model.enumeration}
        onEnumerationChange={enumeration => {
          updateItemInModelStore({ ...model, enumeration })
        }}
      />
    </PropertiesPanel>
  )
}

export default PropertyApiKey
