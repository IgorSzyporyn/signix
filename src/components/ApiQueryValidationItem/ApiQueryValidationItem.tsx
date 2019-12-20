import AutorenewIcon from '@material-ui/icons/Autorenew'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import React from 'react'
import styled from 'styled-components'
import ApiErrorInterface from '../../types/ApiErrorInterface'
import getFontSize from '../../utils/getFontSize'
import { uniqueId } from '../../utils/utilities'
import MUIcon from '../MUIcon/MUIcon'

type WrapperProps = {
  disabled?: boolean
}

const Wrapper = styled.section<WrapperProps>`
  margin-bottom: var(--gutter-large);
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

type IconProps = {
  isLoading?: boolean
  disabled?: boolean
}

const Icon = styled.div<IconProps>`
  ${({ isLoading, disabled }) => {
    return isLoading && !disabled ? 'animation: spin 1s linear infinite;' : null
  }}
`

const Title = styled.div`
  margin-left: var(--gutter);
`

const Main = styled.main``

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

type QueryValidationItemProps = {
  validating?: boolean
  valid?: boolean
  title?: string
  disabled?: boolean
  errors?: ApiErrorInterface[]
}

const ApiQueryValidationItem = ({
  errors,
  title,
  valid,
  validating,
  disabled
}: QueryValidationItemProps) => {
  return (
    <Wrapper disabled={disabled}>
      <Header>
        <Icon isLoading={validating} disabled={disabled}>
          {(validating || disabled) && (
            <MUIcon size="small" render={p => <AutorenewIcon {...p} />} />
          )}
          {!validating && !disabled && (
            <>
              {valid && (
                <MUIcon
                  size="small"
                  style={{ color: 'var(--color-success)' }}
                  render={p => <CheckCircleIcon {...p} />}
                />
              )}
              {!valid && (
                <MUIcon
                  size="small"
                  style={{ color: 'var(--color-failure)' }}
                  render={p => <ErrorIcon {...p} />}
                />
              )}
            </>
          )}
        </Icon>
        <Title>{title}</Title>
      </Header>
      <Main>
        {errors &&
          errors.map(error => (
            <ErrorContainer key={`ApiQueryValidationItem-${uniqueId()}`}>
              <ErrorContainerItem>{error.text}</ErrorContainerItem>
            </ErrorContainer>
          ))}
      </Main>
    </Wrapper>
  )
}

export default ApiQueryValidationItem
