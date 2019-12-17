import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import ApiStore from '../../stores/ApiStore'
import updateApiStore from '../../stores/apiStore/updateApiStore'
import updateValidatingInApiStore from '../../stores/apiStore/updateValidatingInApiStore'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import MUIcon from '../MUIcon/MUIcon'
import QueryValidation from '../QueryValidation/QueryValidation'

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

type QueryValidatorProps = {
  disabled?: boolean
}

const QueryValidator = ({ disabled }: QueryValidatorProps) => {
  const { valid, validating, tested }: ApiStoreInterface = useStore(ApiStore)

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
            updateValidatingInApiStore(true)
          }}
        >
          {tested ? 'Validate & Sync' : 'Requires Validation & Sync'}
        </Button>
      </MainContainer>
      {validating && (
        <Modal>
          <QueryValidation
            onValidated={valid => {
              updateApiStore({
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

export default QueryValidator
