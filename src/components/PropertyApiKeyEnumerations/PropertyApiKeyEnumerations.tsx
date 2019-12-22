import React from 'react'
import styled from 'styled-components'
import ApiEnumerationInterface from '../../types/ApiEnumerationInterface'
import getFontSize from '../../utils/getFontSize'
import FieldEnumeration from '../FieldEnumeration/FieldEnumeration'

const Title = styled.h5`
  margin-bottom: var(--gutter);
`

const Text = styled.p`
  font-size: ${getFontSize('tiny')};
  margin-top: 0;
  margin-bottom: var(--gutter);
`

const ErrorContainer = styled.div`
  padding: var(--spacing);
  text-align: center;
`

type PropertyApiKeyEnumerationsProps = {
  hidden?: boolean
  enumeration: ApiEnumerationInterface[]
  apiErrors?: boolean
  layerErrors?: boolean
}

const PropertyApiKeyEnumerations = ({
  hidden,
  enumeration,
  apiErrors,
  layerErrors
}: PropertyApiKeyEnumerationsProps) => {
  const hasEnumerations = enumeration.length > 0
  const hasErrors = apiErrors || layerErrors

  return (
    <div hidden={hidden || !hasEnumerations}>
      <Title>API Data Enumerations</Title>
      <Text>Enumerate values from API Data with options from API Model</Text>
      {hasErrors ? (
        <ErrorContainer>
          {apiErrors ? (
            <Text>Enumeration inactive because of API connection problems</Text>
          ) : (
            <>
              <Text>Enumeration inactive</Text>
              <Text>Re-Sync with API is required</Text>
            </>
          )}
        </ErrorContainer>
      ) : (
        <FieldEnumeration enumeration={enumeration} />
      )}
    </div>
  )
}

export default PropertyApiKeyEnumerations
