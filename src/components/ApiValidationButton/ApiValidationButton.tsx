import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ApiQueryStore from '../../stores/ApiQueryStore'
import updateApiQueryStore from '../../stores/apiQueryStore/updateApiQueryStore'
import updateValidInApiQueryStore from '../../stores/apiQueryStore/updateValidInApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiQueryValidation from '../ApiQueryValidation/ApiQueryValidation'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import MUIcon from '../MUIcon/MUIcon'
import updateValidatingInApiQueryStore from '../../stores/apiQueryStore/updateValidatingInApiQueryStore'

type WrapperProps = {
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  margin: var(--spacing-small) 0;
  border-radius: 0.5rem;
  ${({ disabled }) => {
    return disabled ? 'opacity: 0.4;' : null
  }};
`

const MainContainer = styled.div`
  margin-left: var(--spacing);
`

type ApiQueryValidatorProps = {
  disabled?: boolean
}

const ApiValidationButton = ({ disabled }: ApiQueryValidatorProps) => {
  const { valid, validating, tested }: ApiQueryStoreInterface = useStore(
    ApiQueryStore
  )

  return (
    <Wrapper disabled={disabled}>
      {tested && (
        <>
          {valid ? (
            <MUIcon
              size="large"
              style={{
                color: valid ? 'var(--color-success)' : 'var(--color-failure)'
              }}
              render={p =>
                valid ? <CheckCircleIcon {...p} /> : <ErrorIcon {...p} />
              }
            />
          ) : (
            <MUIcon
              size="large"
              style={{ color: 'var(--color-failure)' }}
              render={p => <ErrorIcon {...p} />}
            />
          )}
        </>
      )}
      {!tested && (
        <MUIcon
          size="large"
          style={{ color: 'var(--color-warning)' }}
          render={p => <WarningIcon {...p} />}
        />
      )}
      <MainContainer>
        <Button
          variant="primary"
          onClick={() => {
            updateValidatingInApiQueryStore(true)
          }}
        >
          {tested ? 'Validate & Sync' : 'Requires Validation & Sync'}
        </Button>
      </MainContainer>
      {validating && (
        <Modal>
          <ApiQueryValidation
            onValidated={valid => {
              updateApiQueryStore({
                valid,
                validating: false,
                tested: true
              })
            }}
          />
        </Modal>
      )}
    </Wrapper>
  )
}

export default ApiValidationButton
