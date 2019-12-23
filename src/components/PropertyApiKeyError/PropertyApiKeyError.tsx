import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ApiQueryStore from '../../stores/ApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import ApiErrorInterface from '../../types/ApiErrorInterface'
import ApiErrorLevelTypes from '../../types/ApiErrorLevelTypes'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import getFontSize from '../../utils/getFontSize'
import Button from '../Button/Button'
import { uniqueId } from '../../utils/utilities'

const Wrapper = styled.div`
  font-size: ${getFontSize('xsmall')};
  margin-bottom: var(--spacing-large);
`

const TextContainer = styled.div``

const Text = styled.p`
  font-size: ${getFontSize('xsmall')};
  margin-top: 0;
  margin-bottom: var(--spacing);
`

const getApiErrorText = (enabled: boolean, valid: boolean, tested: boolean) => {
  let text: React.ReactNode[] = []

  if (!enabled) {
    return [
      <Text>API is disabled</Text>,
      <Text>Activate and validate it to enable this component again</Text>
    ]
  }

  if (!valid) {
    return [<Text>API is not valid</Text>, <Text>Revalidate to enable this component again</Text>]
  }

  if (!tested) {
    return [<Text>API is not tested</Text>, <Text>Revalidate to enable this component again</Text>]
  }

  return text
}

const getLayerErrorText = (errors?: ApiErrorInterface[]) => {
  let text: React.ReactNode[] = []
  const maxLevel = getLayerErrorMaxLevel(errors)

  if (!errors) {
    return text
  }

  if (maxLevel === 'critical') {
    text = errors
      .filter(error => error.errorLevel === 'critical')
      .map(error => {
        return [<Text key={`PropertyApiKeyError-${uniqueId()}`}>{error.text}</Text>]
      })

    text.push([<Text>Fix this by selecting another API key</Text>])
  } else {
    text = [
      <Text key={`PropertyApiKeyError-${uniqueId()}`}>
        The enumerations and API Model has inconsistencies
      </Text>,
      <Text key={`PropertyApiKeyError-${uniqueId()}`}>
        Re-Sync will require to add and/or remove fields
      </Text>
    ]
  }

  return text
}

const getLayerErrorMaxLevel = (errors?: ApiErrorInterface[]) => {
  let errorLevel: ApiErrorLevelTypes | undefined = undefined

  if (errors && errors.length > 0) {
    errors.some(error => {
      errorLevel = error.errorLevel
      return error.errorLevel === 'critical'
    })
  }

  return errorLevel
}

type PropertyApiKeyErrorProps = {
  hidden?: boolean
  errors?: ApiErrorInterface[]
  apiErrors?: boolean
  layerErrors?: boolean
  onSyncClick?: () => void
}

const PropertyApiKeyError = ({
  errors,
  hidden,
  apiErrors,
  layerErrors,
  onSyncClick
}: PropertyApiKeyErrorProps) => {
  const { enabled: apiEnabled }: ApiStoreInterface = useStore(ApiStore)
  const { valid: apiValid, tested: apiTested }: ApiQueryStoreInterface = useStore(ApiQueryStore)

  const apiErrorText = getApiErrorText(apiEnabled, apiValid, apiTested)
  const layerErrorText = getLayerErrorText(errors)
  const layerErrorMaxLevel = getLayerErrorMaxLevel(errors)

  return (
    <Wrapper hidden={hidden || (!apiErrors && !layerErrors)}>
      {apiErrors ? (
        <TextContainer>{apiErrorText}</TextContainer>
      ) : (
        <>
          <TextContainer>{layerErrorText}</TextContainer>
          {layerErrorMaxLevel === 'fixable' && (
            <Button variant="primary" onClick={onSyncClick}>
              Re-Sync Enumerations
            </Button>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default PropertyApiKeyError
