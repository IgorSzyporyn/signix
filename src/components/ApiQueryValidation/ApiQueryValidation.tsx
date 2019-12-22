import { useStore } from 'laco-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ApiQueryErrorStore from '../../stores/ApiQueryErrorStore'
import resetApiQueryErrorStore from '../../stores/apiQueryErrorStore/resetApiQueryErrorStore'
import ApiStore from '../../stores/ApiStore'
import ApiQueryErrorStoreInterface from '../../types/ApiQueryErrorStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import apiValidateDataFetch from '../../utils/apiValidateDataFetch'
import apiValidateDataKeys from '../../utils/apiValidateDataKeys'
import apiValidateLayers from '../../utils/apiValidateLayers'
import apiValidateModelFetch from '../../utils/apiValidateModelFetch'
import apiValidateModelIntegrity from '../../utils/apiValidateModelIntegrity'
import getFontSize from '../../utils/getFontSize'
import ApiQueryValidationItem from '../ApiQueryValidationItem/ApiQueryValidationItem'
import Button from '../Button/Button'

const Wrapper = styled.section`
  font-size: ${getFontSize('xsmall')};
  min-width: 48rem;
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin-bottom: var(--spacing-huge);
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const ListItem = styled.li``

const ButtonContainer = styled.div`
  margin-top: var(--spacing-huge);
  display: flex;
  justify-content: flex-end;

  & > * {
    margin-right: var(--gutter);

    &:last-child {
      margin-right: 0;
    }
  }
`

type ApiQueryValidationProps = {
  onValidated?: (valid: boolean) => void
}

const ApiQueryValidation = ({ onValidated }: ApiQueryValidationProps) => {
  const errors: ApiQueryErrorStoreInterface = useStore(ApiQueryErrorStore)
  const { modelQuery }: ApiStoreInterface = useStore(ApiStore)

  // DATA STATES
  const [dataFetchValid, setDataFetchValid] = useState(false)
  const [dataFetchValidating, setDataFetchValidating] = useState(true)

  const [dataKeysValid, setDataKeysValid] = useState(false)
  const [dataKeysValidating, setDataKeysValidating] = useState(false)

  const [modelFetchValid, setModelFetchValid] = useState(false)
  const [modelFetchValidating, setModelFetchValidating] = useState(true)

  const [modelIntegrityValid, setModelIntegrityValid] = useState(false)
  const [modelIntegrityValidating, setModelIntegrityValidating] = useState(false)

  useEffect(() => {
    resetApiQueryErrorStore()

    // DATA FETCH VALIDATION & SYNC
    apiValidateDataFetch(valid => {
      setDataFetchValid(valid)
      setDataFetchValidating(false)
    })

    if (modelQuery.enabled) {
      // MODEL FETCH VALIDATION & SYNC
      apiValidateModelFetch(valid => {
        setModelFetchValid(valid)
        setModelFetchValidating(false)
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // DATA KEYS VALIDATION & SYNC
  useEffect(() => {
    if (dataFetchValid) {
      apiValidateDataKeys(valid => {
        setDataKeysValid(valid)
        setDataKeysValidating(false)
      })
    }
  }, [dataFetchValid])

  // MODEL INTEGRITY VALIDATION
  useEffect(() => {
    if (dataKeysValid && modelFetchValid) {
      apiValidateModelIntegrity(valid => {
        setModelIntegrityValid(valid)
        setModelIntegrityValidating(false)
      })
    }
  }, [modelFetchValid, dataKeysValid])

  // LAYER INTEGRITY CHECK
  useEffect(() => {
    if (modelQuery.enabled) {
      if (
        !dataFetchValidating &&
        !dataKeysValidating &&
        !modelFetchValidating &&
        !modelIntegrityValidating
      ) {
        console.log('A')
        apiValidateLayers()
      }
    } else {
      if (!dataFetchValidating && !dataKeysValidating) {
        console.log('B')
        apiValidateLayers()
      }
    }
  }, [
    modelQuery.enabled,
    dataFetchValidating,
    dataKeysValidating,
    modelFetchValidating,
    modelIntegrityValidating
  ])

  let valid = dataFetchValid && dataKeysValid

  let validating = dataFetchValidating || dataKeysValidating

  if (modelQuery.enabled) {
    valid = dataFetchValid && dataKeysValid && modelFetchValid && modelIntegrityValid
    validating =
      dataFetchValidating || dataKeysValidating || modelFetchValidating || modelIntegrityValidating
  }

  return (
    <Wrapper>
      <Title>Checking Validity Of Provided API</Title>
      <List>
        <ListItem>
          <ApiQueryValidationItem
            valid={dataFetchValid}
            title="Fetching Example Data"
            validating={dataFetchValidating}
            errors={errors.dataFetch}
          />
        </ListItem>
        <ListItem>
          <ApiQueryValidationItem
            disabled={dataFetchValidating}
            valid={dataKeysValid}
            title="Writing Data Keys"
            validating={dataKeysValidating}
            errors={errors.dataKeys}
          />
        </ListItem>
        {modelQuery.enabled && (
          <>
            <ListItem>
              <ApiQueryValidationItem
                valid={modelFetchValid}
                title="Fetching Model"
                validating={modelFetchValidating}
                errors={errors.modelFetch}
              />
            </ListItem>
            <ListItem>
              <ApiQueryValidationItem
                disabled={dataKeysValidating || modelFetchValidating}
                valid={modelIntegrityValid}
                title="Checking Model Integrity"
                validating={modelIntegrityValidating}
                errors={errors.modelIntegrity}
              />
            </ListItem>
          </>
        )}
      </List>
      <ButtonContainer>
        <Button
          variant="primary"
          disabled={validating}
          onClick={() => {
            onValidated && onValidated(valid)
          }}
        >
          OK
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default ApiQueryValidation
