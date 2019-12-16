import { useStore } from 'laco-react'
import React, { useState, useEffect } from 'react'
import QueryDataStore from '../../stores/QueryDataStore'
import FieldOptionsOptionType from '../../types/FieldOptionsOptionType'
import ModelInterface from '../../types/ModelInterface'
import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'
import FieldEnumeration from '../FieldEnumeration/FieldEnumeration'
import FieldOptions from '../FieldOptions/FieldOptions'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import ModelEnumerationTypes from '../../types/ModelEnumerationTypes'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelEnumerationInterface from '../../types/ModelEnumerationInterface'
import Button from '../Button/Button'
import styled from 'styled-components'
import QueryDataStoreModelInterface from '../../types/QueryDataStoreModelInterface'

const createEnum = (
  dataStoreModel: QueryDataStoreModelInterface,
  type: ModelEnumerationTypes,
  value?: string
) => {
  let enumeration: ModelEnumerationInterface[] = []

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

const ConfirmContainer = styled.div`
  margin-bottom: var(--spacing);
`

const ConfirmTitle = styled.h5`
  margin-bottom: var(--gutter);
`

const ConfirmButtons = styled.div`
  & > *:first-child {
    margin-right: var(--gutter);
  }
`

const EnumerationContainer = styled.div``

const EnumerationTitle = styled.h5`
  margin-bottom: var(--gutter);
`

type PropertyApiKeyEnumerationState = {
  confirmChange: boolean
  confirmChangeType: 'proceed' | 'cancel' | null
  storedEnumeration: ModelEnumerationInterface[]
  storedValue: string
  _stupidlyCreatedIdToForceRender: number
}

type PropertyApiKeyQueryProps = {
  type: ModelEnumerationTypes
  model: ModelInterface
}

const PropertyApiKey = ({ type, model }: PropertyApiKeyQueryProps) => {
  const { dataKeys, model: dataStoreModel }: QueryDataStoreInterface = useStore(
    QueryDataStore
  )

  const [enumerationState, setEnumerationState] = useState<
    PropertyApiKeyEnumerationState
  >({
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

  return (
    <PropertiesPanel title="API Connection" type="apiKey">
      <ConfirmContainer hidden={!enumerationState.confirmChange}>
        <ConfirmTitle>Your existing enumeration will be wiped</ConfirmTitle>
        <ConfirmButtons>
          <Button
            variant="primary"
            onClick={() => {
              setEnumerationState({
                ...enumerationState,
                confirmChangeType: 'proceed'
              })
            }}
          >
            Proceed
          </Button>
          <Button
            onClick={() => {
              setEnumerationState({
                ...enumerationState,
                confirmChangeType: 'cancel'
              })
            }}
          >
            Cancel
          </Button>
        </ConfirmButtons>
      </ConfirmContainer>
      <FieldOptions
        id={`${enumerationState._stupidlyCreatedIdToForceRender}`}
        hidden={enumerationState.confirmChange}
        label="Pick API key for value"
        value={model.value}
        options={dataKeys as FieldOptionsOptionType[]}
        onSelection={value => {
          const enumeration = createEnum(dataStoreModel, type, value)

          if (model.enumeration.length > 0) {
            setEnumerationState({
              ...enumerationState,
              confirmChange: true,
              storedEnumeration: enumeration,
              storedValue: value || ''
            })
          } else {
            updateItemInModelStore({ ...model, enumeration, value })
          }
        }}
      />
      {model.enumeration.length > 0 && (
        <EnumerationContainer hidden={enumerationState.confirmChange}>
          <EnumerationTitle>API Key Enumerations</EnumerationTitle>
          <FieldEnumeration enumeration={model.enumeration} />
        </EnumerationContainer>
      )}
    </PropertiesPanel>
  )
}

export default PropertyApiKey
