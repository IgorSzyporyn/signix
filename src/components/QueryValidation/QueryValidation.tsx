import { useStore } from 'laco-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import QueryStore from '../../stores/QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import { uniqueId } from '../../utils/utilities'
import validateDataEndpoint from '../../utils/validateDataEndpoint'
import validateDataEndpointFetch from '../../utils/validateDataEndpointFetch'
import validateDataEndpointWrite from '../../utils/validateDataEndpointWrite'
import validateModelEndpoint from '../../utils/validateModelEndpoint'
import validateModelEndpointFetch from '../../utils/validateModelEndpointFetch'
import validateModelEndpointIntegrity from '../../utils/validateModelEndpointIntegrity'
import QueryValidationItem from '../QueryValidationItem/QueryValidationItem'
import getFontSize from '../../utils/getFontSize'
import Button from '../Button/Button'
import validateLayerModelIntegrity, {
  ValidateLayerModelResultItem
} from '../../utils/validateLayerModelIntegrity'

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

const ModelIntegrityError = styled.div`
  padding-top: var(--half-gutter);
  padding-bottom: var(--half-gutter);
  padding-left: calc(var(--spacing) + var(--half-gutter));

  &:first-child {
    margin-top: var(--half-gutter);
  }
`

const LayerErrorTitle = styled.div`
  line-height: 1.4em;
  font-size: ${getFontSize('tiny')};
  padding-left: calc(var(--spacing) + var(--half-gutter));
  margin-bottom: var(--gutter);
  margin-top: var(--gutter);
`

const LayerError = styled.div`
  font-size: ${getFontSize('tiny')};
  padding-top: var(--half-gutter);
  padding-bottom: var(--half-gutter);
  padding-left: calc(var(--spacing) + var(--half-gutter));
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

  const [layersValidErrors, setLayersValidErrors] = useState<
    ValidateLayerModelResultItem[]
  >([])

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
      validateDataEndpointFetch(data, valid => {
        setDataEndpointFetchValid(valid)
        setDataEndpointFetchValidating(false)

        if (!valid) {
          setDataEndpointWriteValidating(false)
          setModelEndpointIntegrityValidating(false)
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
    if (modelEndpointIntegrityValid) {
      validateLayerModelIntegrity(result => {
        if (result === true) {
          setLayersValid(true)
          setLayersValidating(false)
        } else {
          setLayersValid(false)
          setLayersValidating(false)
          setLayersValidErrors(result)
        }
      })
    }
  }, [modelEndpointIntegrityValid])

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
            title="Checking Model Table Integrity"
            validating={
              dataEndpointWriteValid &&
              modelEndpointFetchValid &&
              modelEndpointIntegrityValidating
            }
          >
            {modelEndpointIntegrityErrors.length > 0 &&
              modelEndpointIntegrityErrors.map(error => (
                <ModelIntegrityError
                  key={`modelEndpointIntegrityError-${uniqueId()}`}
                >
                  - {error}
                </ModelIntegrityError>
              ))}
          </QueryValidationItem>
        </ListItem>
        <ListItem>
          <QueryValidationItem
            disabled={modelEndpointIntegrityValidating}
            valid={layersValid}
            title="Checking Layer API Integrity"
            validating={layersValidating}
          >
            {layersValidErrors.length > 0 && (
              <>
                <LayerErrorTitle>
                  <div>
                    Note: Errors in layer API integrity does not affect the
                    validity of the provided API
                  </div>
                  <div>
                    And they can most likely be fixed with our auto fix button
                  </div>
                </LayerErrorTitle>
                {layersValidErrors.map(item => {
                  return (
                    <LayerError key={`layerError-${uniqueId()}`}>
                      {item.error}
                    </LayerError>
                  )
                })}
              </>
            )}
          </QueryValidationItem>
        </ListItem>
      </List>
      <ButtonContainer>
        {!validating && !layersValid && (
          <Button
            variant="secondary"
            disabled={validating}
            onClick={() => {
              onValidated && onValidated(valid)
            }}
          >
            Auto Fix Layers
          </Button>
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
