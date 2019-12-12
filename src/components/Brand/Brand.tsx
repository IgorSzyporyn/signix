import React from 'react'
import styled from 'styled-components'
import ExploreIcon from '@material-ui/icons/Explore'
import MUIcon from '../MUIcon/MUIcon'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2.2rem;
  padding: var(--spacing-small) 0 var(--spacing-small) var(--spacing-medium);
`

const Title = styled.h1`
  margin-left: var(--spacing);
  color: var(--color-lightblue);
`

const Brand = () => (
  <Wrapper>
    <MUIcon size="large" render={p => <ExploreIcon {...p} />} />
    <Title>Signature Generator</Title>
  </Wrapper>
)

export default Brand
