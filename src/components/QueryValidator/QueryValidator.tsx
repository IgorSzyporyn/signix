import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import QueryStore from '../../stores/QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import validateQueryEntries from '../../utils/validateQueryEntries'
import MUIcon from '../MUIcon/MUIcon'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import updateValidatingInQueryStore from '../../stores/queryStore/updateValidatingInQueryStore'
import QueryValidation from '../QueryValidation/QueryValidation'
import updateQueryStore from '../../stores/queryStore/updateQueryStore'

type WrapperProps = {
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: var(--spacing-small) 0;
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
  const {
    valid,
    validating,
    tested,
    data,
    model
  }: QueryStoreInterface = useStore(QueryStore)

  const hasValidQueryEntries = validateQueryEntries(data, model)

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
              render={p => <WarningIcon {...p} />}
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
        {tested && (
          <>
            {valid ? (
              <div>API Validates</div>
            ) : (
              <div>API Does Not Validate</div>
            )}
          </>
        )}
        {!tested && <div>API Requires Validation</div>}
        <Button
          variant="primary"
          onClick={() => {
            updateValidatingInQueryStore(true)
          }}
        >
          Validate
        </Button>
      </MainContainer>
      {validating && (
        <Modal>
          <QueryValidation
            onValidated={valid => {
              updateQueryStore({
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
