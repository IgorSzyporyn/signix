import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const Wrapper = styled.div`
  margin-bottom: var(--spacing);
`

const Title = styled.h5`
  margin-bottom: var(--gutter);
`

const Buttons = styled.div`
  & > *:first-child {
    margin-right: var(--gutter);
  }
`

type PropertyApiKeyConfirmProps = {
  hidden?: boolean
  onProceed?: () => void
  onCancel?: () => void
}

const PropertyApiKeyConfirm = ({ hidden, onProceed, onCancel }: PropertyApiKeyConfirmProps) => {
  return (
    <Wrapper hidden={hidden}>
      <Title>Your existing enumeration will be wiped</Title>
      <Buttons>
        <Button variant="primary" onClick={onProceed}>
          Proceed
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Buttons>
    </Wrapper>
  )
}

export default PropertyApiKeyConfirm
