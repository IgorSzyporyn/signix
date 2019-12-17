import { useStore } from 'laco-react'
import React, { useState, useEffect } from 'react'
import ApiQueryStore from '../../stores/ApiQueryStore'
import FieldOptionsOptionType from '../../types/FieldOptionsOptionType'
import ModelInterface from '../../types/ModelInterface'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import FieldEnumeration from '../FieldEnumeration/FieldEnumeration'
import FieldOptions from '../FieldOptions/FieldOptions'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import ModelCoreTypes from '../../types/ModelCoreTypes'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ApiEnumerationInterface from '../../types/ApiEnumerationInterface'
import WarningIcon from '@material-ui/icons/Warning'
import Button from '../Button/Button'
import styled from 'styled-components'
import ApiQueryStoreModelInterface from '../../types/ApiQueryStoreModelInterface'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import MUIcon from '../MUIcon/MUIcon'

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

const TitleContainer = styled.div`
  display: flex;
`

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

const ErrorContainer = styled.div`
  margin-bottom: var(--spacing);
`

const EnumerationContainer = styled.div``

const EnumerationTitle = styled.h5`
  margin-bottom: var(--gutter);
`

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
  const { [model.id!]: errors }: ApiLayerErrorStoreInterface = useStore(
    ApiLayerErrorStore
  )
  const { dataKeys, model: dataStoreModel }: ApiQueryStoreInterface = useStore(
    ApiQueryStore
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
    <PropertiesPanel
      title={
        <TitleContainer style={{ position: 'relative' }}>
          {errors && errors.length > 0 && (
            <MUIcon
              size="small"
              style={{
                color: 'var(--color-warning)',
                marginRight: 'var(--gutter)'
              }}
              render={p => <WarningIcon {...p} />}
            />
          )}
          <div>API Connection</div>
        </TitleContainer>
      }
      type="apiKey"
    >
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
      <ErrorContainer hidden={!(errors && errors.length > 0)}>
        errors here
      </ErrorContainer>
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
