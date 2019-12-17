import { useStore } from 'laco-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import resetApiLayerErrorStore from '../../stores/apiLayerErrorStore/resetApiLayerErrorStore'
import setApiLayerErrorStore from '../../stores/apiLayerErrorStore/setApiLayerErrorStore'
import ApiStore from '../../stores/ApiStore'
import ApiErrorInterface from '../../types/ApiErrorInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import getFontSize from '../../utils/getFontSize'
import groupLayerErrorsById from '../../utils/groupLayerErrorsById'
import { uniqueId } from '../../utils/utilities'
import validateDataEndpoint from '../../utils/validateDataEndpoint'
import validateDataEndpointFetch from '../../utils/validateDataEndpointFetch'
import validateDataEndpointWrite from '../../utils/validateDataEndpointWrite'
import validateLayerModelIntegrity from '../../utils/validateLayerModelIntegrity'
import validateModelEndpoint from '../../utils/validateModelEndpoint'
import validateModelEndpointFetch from '../../utils/validateModelEndpointFetch'
import validateModelEndpointIntegrity from '../../utils/validateModelEndpointIntegrity'
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

const ErrorContainer = styled.ul`
  font-size: ${getFontSize('tiny')};
  margin-top: var(--half-gutter);
  padding-top: var(--gutter);
  padding-bottom: 0;
  padding-right: 0;
  padding-left: var(--spacing-large);
`

const ErrorContainerItem = styled.li`
  padding-left: var(--gutter);
`

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
  const { dataQuery: data, modelQuery: model }: ApiStoreInterface = useStore(
    ApiStore
  )

  // DATA STATES
  const [dataEndpointValid, setDataEndpointValid] = useState(false)
  const [dataEndpointValidating, setDataEndpointValidating] = useState(true)
  const [
    dataEndpointError,
    setDataEndpointError
  ] = useState<ApiErrorInterface | null>(null)

  const [dataEndpointFetchValid, setDataEndpointFetchValid] = useState(false)
  const [
    dataEndpointFetchValidating,
    setDataEndpointFetchValidating
  ] = useState(true)
  const [dataEndpointFetchError, setDataEndpointFetchError] = useState<
    ApiErrorInterface[] | null
  >(null)

  const [dataEndpointWriteValid, setDataEndpointWriteValid] = useState(false)
  const [
    dataEndpointWriteValidating,
    setDataEndpointWriteValidating
  ] = useState(true)
  const [
    dataEndpointWriteError,
    setDataEndpointWriteError
  ] = useState<ApiErrorInterface | null>(null)

  // MODEL STATES
  const [modelEndpointValid, setModelEndpointValid] = useState(false)
  const [modelEndpointValidating, setModelEndpointValidating] = useState(true)

  const [modelEndpointFetchValid, setModelEndpointFetchValid] = useState(false)
  const [
    modelEndpointFetchValidating,
    setModelEndpointFetchValidating
  ] = useState(true)

  const [
    modelEndpointIntegrityValid,
    setModelEndpointIntegrityValid
  ] = useState(false)
  const [
    modelEndpointIntegrityValidating,
    setModelEndpointIntegrityValidating
  ] = useState(true)

  const [
    modelEndpointIntegrityErrors,
    setModelEndpointIntegrityErrors
  ] = useState<string[]>([])

  // COMMON VALIDATIONS
  useEffect(() => {
    // DATA
    validateDataEndpoint(data.url, (valid, error) => {
      setDataEndpointValid(valid)
      setDataEndpointValidating(false)

      if (!valid) {
        setDataEndpointError(error)
        setDataEndpointFetchValidating(false)
        setDataEndpointWriteValidating(false)
        setModelEndpointIntegrityValidating(false)
      } else {
        setDataEndpointError(null)
      }
    })

    // MODEL
    validateModelEndpoint(model.url, valid => {
      setModelEndpointValid(valid)
      setModelEndpointValidating(false)

      if (!valid) {
        setModelEndpointFetchValidating(false)
        setModelEndpointIntegrityValidating(false)
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, model])

  // DATA FETCH VALIDATION
  useEffect(() => {
    if (dataEndpointValid) {
      validateDataEndpointFetch(data, (valid, error) => {
        setDataEndpointFetchValid(valid)
        setDataEndpointFetchValidating(false)

        if (!valid) {
          setDataEndpointFetchError(error)
          setDataEndpointWriteValidating(false)
          setModelEndpointIntegrityValidating(false)
        } else {
          setDataEndpointFetchError(null)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEndpointValid])

  // DATA WRITE VALIDATION
  useEffect(() => {
    if (dataEndpointFetchValid) {
      validateDataEndpointWrite((valid, error) => {
        setDataEndpointWriteValid(valid)
        setDataEndpointWriteValidating(false)

        if (!valid) {
          setDataEndpointWriteError(error)
        } else {
          setDataEndpointWriteError(null)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEndpointFetchValid])

  // MODEL FETCH VALIDATION
  useEffect(() => {
    if (modelEndpointValid) {
      validateModelEndpointFetch(model, valid => {
        setModelEndpointFetchValid(valid)
        setModelEndpointFetchValidating(false)

        if (!valid) {
          setModelEndpointIntegrityValidating(false)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelEndpointValid])

  // MODEL INTEGRITY VALIDATION
  useEffect(() => {
    if (dataEndpointWriteValid && modelEndpointFetchValid) {
      validateModelEndpointIntegrity((valid, errors) => {
        setModelEndpointIntegrityValid(valid)
        setModelEndpointIntegrityValidating(false)
        setModelEndpointIntegrityErrors(errors)
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelEndpointFetchValid, dataEndpointWriteValid])

  // LAYER INTEGRITY CHECK
  useEffect(() => {
    if (dataEndpointWriteValid && modelEndpointFetchValid) {
      validateLayerModelIntegrity(result => {
        if (result === true) {
          resetApiLayerErrorStore()
        } else {
          const groupedResult = groupLayerErrorsById(result)
          setApiLayerErrorStore(groupedResult)
        }
      })
    }
  }, [modelEndpointFetchValid, dataEndpointWriteValid])

  const valid =
    dataEndpointValid &&
    dataEndpointFetchValid &&
    dataEndpointWriteValid &&
    modelEndpointValid &&
    modelEndpointFetchValid &&
    modelEndpointIntegrityValid

  const validating =
    dataEndpointValidating ||
    dataEndpointFetchValidating ||
    dataEndpointWriteValidating ||
    modelEndpointValidating ||
    modelEndpointFetchValidating ||
    modelEndpointIntegrityValidating

  return (
    <Wrapper>
      <Title>Checking Validity Of Provided API</Title>
      <List>
        <ListItem>
          <ApiQueryValidationItem
            valid={dataEndpointValid}
            title="Validating Query Data Endpoint"
            validating={dataEndpointValidating}
          >
            {dataEndpointError !== null && (
              <ErrorContainer>
                <ErrorContainerItem>
                  {dataEndpointError.text}
                </ErrorContainerItem>
              </ErrorContainer>
            )}
          </ApiQueryValidationItem>
        </ListItem>
        <ListItem>
          <ApiQueryValidationItem
            disabled={dataEndpointValidating}
            valid={dataEndpointFetchValid}
            title="Fetching Example Data"
            validating={dataEndpointValid && dataEndpointFetchValidating}
          >
            {dataEndpointFetchError &&
              dataEndpointFetchError.map(error => {
                return (
                  <ErrorContainer key={`dataEndpointFetchError-${uniqueId()}`}>
                    <ErrorContainerItem>{error.text}</ErrorContainerItem>
                  </ErrorContainer>
                )
              })}
          </ApiQueryValidationItem>
        </ListItem>
        <ListItem>
          <ApiQueryValidationItem
            disabled={dataEndpointValidating}
            valid={dataEndpointWriteValid}
            title="Writing Data Keys"
            validating={dataEndpointValid && dataEndpointWriteValidating}
          >
            {dataEndpointWriteError && (
              <ErrorContainer>
                <ErrorContainerItem>
                  {dataEndpointWriteError.text}
                </ErrorContainerItem>
              </ErrorContainer>
            )}
          </ApiQueryValidationItem>
        </ListItem>
        <ListItem>
          <ApiQueryValidationItem
            valid={modelEndpointValid}
            title="Validating Query Model Endpoint"
            validating={modelEndpointValidating}
          />
        </ListItem>
        <ListItem>
          <ApiQueryValidationItem
            disabled={modelEndpointValidating}
            valid={modelEndpointFetchValid}
            title="Fetching & Writing Model"
            validating={modelEndpointValid && modelEndpointFetchValidating}
          />
        </ListItem>
        <ListItem>
          <ApiQueryValidationItem
            disabled={
              dataEndpointWriteValidating || modelEndpointFetchValidating
            }
            valid={modelEndpointIntegrityValid}
            title="Checking Model Integrity"
            validating={
              dataEndpointWriteValid &&
              modelEndpointFetchValid &&
              modelEndpointIntegrityValidating
            }
          >
            {modelEndpointIntegrityErrors.length > 0 &&
              modelEndpointIntegrityErrors.map(error => (
                <ErrorContainer
                  key={`modelEndpointIntegrityError-${uniqueId()}`}
                >
                  <ErrorContainerItem>{error}</ErrorContainerItem>
                </ErrorContainer>
              ))}
          </ApiQueryValidationItem>
        </ListItem>
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
