import { useStore } from 'laco-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import resetLayerErrorStore from '../../stores/layerErrorStore/resetLayerErrorStore'
import setLayerErrorStore from '../../stores/layerErrorStore/setLayerErrorStore'
import QueryStore from '../../stores/QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import getFontSize from '../../utils/getFontSize'
import groupLayerErrorsById from '../../utils/groupLayerErrorsById'
import updateLayersWithApi from '../../utils/updateLayersWithApi'
import { uniqueId } from '../../utils/utilities'
import validateDataEndpoint from '../../utils/validateDataEndpoint'
import validateDataEndpointFetch from '../../utils/validateDataEndpointFetch'
import validateDataEndpointWrite from '../../utils/validateDataEndpointWrite'
import validateLayerModelIntegrity, {
  ValidateLayerModelResultItem
} from '../../utils/validateLayerModelIntegrity'
import validateModelEndpoint from '../../utils/validateModelEndpoint'
import validateModelEndpointFetch from '../../utils/validateModelEndpointFetch'
import validateModelEndpointIntegrity from '../../utils/validateModelEndpointIntegrity'
import Button from '../Button/Button'
import QueryValidationItem from '../QueryValidationItem/QueryValidationItem'
import GroupedLayerErrorsInterface from '../../types/GroupedLayerErrorsInterface'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'

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

const ErrorContainer = styled.div`
  font-size: ${getFontSize('tiny')};
  padding-top: var(--half-gutter);
  padding-bottom: var(--half-gutter);
  padding-left: calc(var(--spacing) + var(--half-gutter));

  &:first-child {
    margin-top: var(--half-gutter);
  }
`

const ErrorContainerInner = styled.ul``

const ErrorContainerTitle = styled.div`
  margin-top: var(--half-gutter);
  margin-bottom: var(--gutter);
`

const ErrorContainerText = styled.li`
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

type QueryValidationProps = {
  onValidated?: (valid: boolean) => void
}

const QueryValidation = ({ onValidated }: QueryValidationProps) => {
  const { data, model }: QueryStoreInterface = useStore(QueryStore)

  // DATA STATES
  const [dataEndpointValid, setDataEndpointValid] = useState(false)
  const [dataEndpointValidating, setDataEndpointValidating] = useState(true)

  const [dataEndpointFetchValid, setDataEndpointFetchValid] = useState(false)
  const [
    dataEndpointFetchValidating,
    setDataEndpointFetchValidating
  ] = useState(true)

  const [dataEndpointWriteValid, setDataEndpointWriteValid] = useState(false)
  const [
    dataEndpointWriteValidating,
    setDataEndpointWriteValidating
  ] = useState(true)

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

  // LAYER STATTE
  const [layersValid, setLayersValid] = useState(false)
  const [layersValidating, setLayersValidating] = useState(true)
  const [layersFix, setLayersFix] = useState(false)
  const [attempedLayersFix, setAttemptedLayersFix] = useState(false)

  const [layersValidErrors, setLayersValidErrors] = useState<
    GroupedLayerErrorsInterface
  >({})

  // COMMON VALIDATIONS
  useEffect(() => {
    // DATA
    validateDataEndpoint(data.url, valid => {
      setDataEndpointValid(valid)
      setDataEndpointValidating(false)

      if (!valid) {
        setDataEndpointFetchValidating(false)
        setDataEndpointWriteValidating(false)
        setModelEndpointIntegrityValidating(false)
        setLayersValidating(false)
      }
    })

    // MODEL
    validateModelEndpoint(model.url, valid => {
      setModelEndpointValid(valid)
      setModelEndpointValidating(false)

      if (!valid) {
        setModelEndpointFetchValidating(false)
        setModelEndpointIntegrityValidating(false)
        setLayersValidating(false)
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, model])

  // DATA FETCH VALIDATION
  useEffect(() => {
    if (dataEndpointValid) {
      validateDataEndpointFetch(data, valid => {
        setDataEndpointFetchValid(valid)
        setDataEndpointFetchValidating(false)

        if (!valid) {
          setDataEndpointWriteValidating(false)
          setModelEndpointIntegrityValidating(false)
          setLayersValidating(false)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEndpointValid])

  // DATA WRITE VALIDATION
  useEffect(() => {
    if (dataEndpointFetchValid) {
      validateDataEndpointWrite(valid => {
        setDataEndpointWriteValid(valid)
        setDataEndpointWriteValidating(false)
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
          setLayersValidating(false)
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

        if (!valid) {
          setLayersValidating(false)
        }
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelEndpointFetchValid, dataEndpointWriteValid])

  // LAYER INTEGRITY CHECK
  useEffect(() => {
    if (dataEndpointWriteValid && modelEndpointFetchValid) {
      validateLayerModelIntegrity(result => {
        if (result === true) {
          resetLayerErrorStore()
          setLayersValid(true)
          setLayersValidating(false)
        } else {
          const groupedResult = groupLayerErrorsById(result)
          setLayerErrorStore(groupedResult)
          setLayersValid(false)
          setLayersValidating(false)
          setLayersValidErrors(groupedResult)
        }
      })
    }
  }, [modelEndpointFetchValid, dataEndpointWriteValid])

  // LAYER FIX
  useEffect(() => {
    if (layersFix) {
      updateLayersWithApi(layersValidErrors, () => {
        setLayersFix(false)
        setAttemptedLayersFix(true)

        validateLayerModelIntegrity(result => {
          setLayersValidErrors({})

          if (result === true) {
            resetLayerErrorStore()
            setLayersValid(true)
            setLayersValidating(false)
          } else {
            const groupedResult = groupLayerErrorsById(result)
            setLayerErrorStore(groupedResult)
            setLayersValid(false)
            setLayersValidating(false)
            setLayersValidErrors(groupedResult)
          }
        })
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layersFix])

  const valid =
    dataEndpointValid &&
    dataEndpointFetchValid &&
    dataEndpointWriteValid &&
    modelEndpointValid &&
    modelEndpointFetchValid &&
    modelEndpointIntegrityValid &&
    layersValid

  const validating =
    dataEndpointValidating ||
    dataEndpointFetchValidating ||
    dataEndpointWriteValidating ||
    modelEndpointValidating ||
    modelEndpointFetchValidating ||
    modelEndpointIntegrityValidating ||
    layersValidating

  return (
    <Wrapper>
      <Title>Checking Validity Of Provided API</Title>
      <List>
        <ListItem>
          <QueryValidationItem
            valid={dataEndpointValid}
            title="Validating Query Data Endpoint"
            validating={dataEndpointValidating}
          />
        </ListItem>
        <ListItem>
          <QueryValidationItem
            disabled={dataEndpointValidating}
            valid={dataEndpointFetchValid}
            title="Fetching Example Data"
            validating={dataEndpointValid && dataEndpointFetchValidating}
          />
        </ListItem>
        <ListItem>
          <QueryValidationItem
            disabled={dataEndpointValidating}
            valid={dataEndpointWriteValid}
            title="Writing Data Keys"
            validating={dataEndpointValid && dataEndpointWriteValidating}
          />
        </ListItem>
        <ListItem>
          <QueryValidationItem
            valid={modelEndpointValid}
            title="Validating Query Model Endpoint"
            validating={modelEndpointValidating}
          />
        </ListItem>
        <ListItem>
          <QueryValidationItem
            disabled={modelEndpointValidating}
            valid={modelEndpointFetchValid}
            title="Fetching & Writing Model"
            validating={modelEndpointValid && modelEndpointFetchValidating}
          />
        </ListItem>
        <ListItem>
          <QueryValidationItem
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
                  <li>{error}</li>
                </ErrorContainer>
              ))}
          </QueryValidationItem>
        </ListItem>
        <ListItem>
          <QueryValidationItem
            disabled={modelEndpointIntegrityValidating}
            valid={layersValid}
            title="Checking API Integrity For Layers"
            validating={layersValidating}
          >
            {Object.keys(layersValidErrors).map(key => {
              const errors = layersValidErrors[key]
              const title = errors[0] && errors[0].name ? errors[0].name : ''

              return (
                <ErrorContainer>
                  <ErrorContainerTitle>Layer: {title}</ErrorContainerTitle>
                  <ErrorContainerInner>
                    {errors.map(error => (
                      <ErrorContainerText>{error.text}</ErrorContainerText>
                    ))}
                  </ErrorContainerInner>
                </ErrorContainer>
              )
            })}
          </QueryValidationItem>
        </ListItem>
      </List>
      <ButtonContainer>
        {modelEndpointFetchValid && !validating && !layersValid && (
          <>
            {attempedLayersFix ? (
              <>
                {!layersValid && (
                  <Button disabled={true} variant="secondary">
                    Failed To (All) Fix Layers
                  </Button>
                )}
              </>
            ) : (
              <Button
                variant="secondary"
                disabled={validating}
                onClick={() => {
                  setLayersValidating(true)
                  setLayersFix(true)
                }}
              >
                Attempt Fix Layers
              </Button>
            )}
          </>
        )}
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

export default QueryValidation
