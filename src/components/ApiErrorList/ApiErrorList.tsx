import ErrorIcon from '@material-ui/icons/Error'
import React from 'react'
import styled from 'styled-components'
import ApiErrorInterface from '../../types/ApiErrorInterface'
import getFontSize from '../../utils/getFontSize'
import MUIcon from '../MUIcon/MUIcon'

const Wrapper = styled.div``

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--half-gutter);
`

const Title = styled.h5`
  margin-left: var(--gutter);
`

const List = styled.ul`
  margin: 0;
  padding: 0 0 0 3.2rem;
  font-size: ${getFontSize('tiny')};
`

const ListItem = styled.li``

type ApiErrorListProps = {
  title?: string
  errors: ApiErrorInterface[]
}

const ApiErrorList = ({ errors, title }: ApiErrorListProps) => {
  return (
    <Wrapper>
      {title && (
        <TitleContainer>
          <MUIcon
            size="small"
            style={{ color: 'var(--color-failure)' }}
            render={p => <ErrorIcon {...p} />}
          />
          <Title>{title}</Title>
        </TitleContainer>
      )}
      {errors.length > 0 && (
        <List>
          {errors.map(error => {
            return <ListItem>{error.text}</ListItem>
          })}
        </List>
      )}
    </Wrapper>
  )
}

export default ApiErrorList
