import React from 'react'
import styled from 'styled-components'
import ModelTypeIcon from '../ModelTypeIcon/ModelTypeIcon'
import getFontSize from '../../utils/getFontSize'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`

const NoFormRequired = styled.div`
  font-weight: 500;
  max-width: 48rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const RequiredItemsList = styled.ul`
  text-align: left;
  padding: 0;
  list-style: none;
  margin: var(--spacing) auto 0;
`

const RequiredItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: var(--gutter);
  font-size: ${getFontSize('medium')};
`

const RequiredItemTitle = styled.div`
  margin-left: var(--spacing);
`

type DummyProps = {}

const Form = (props: DummyProps) => (
  <Wrapper>
    <NoFormRequired>
      <p>No layers requires user interaction.</p>
      <p>User interaction is only required by usage of these layers.</p>
      <RequiredItemsList>
        <RequiredItem>
          <ModelTypeIcon type={'textdynamic'} size="large" />
          <RequiredItemTitle>Text Input</RequiredItemTitle>
        </RequiredItem>
        <RequiredItem>
          <ModelTypeIcon type={'textoptions'} size="large" />
          <RequiredItemTitle>Text Options</RequiredItemTitle>
        </RequiredItem>
        <RequiredItem>
          <ModelTypeIcon type={'imagedynamic'} size="large" />
          <RequiredItemTitle>Image Input</RequiredItemTitle>
        </RequiredItem>
        <RequiredItem>
          <ModelTypeIcon type={'imageoptions'} size="large" />
          <RequiredItemTitle>Image Options</RequiredItemTitle>
        </RequiredItem>
        <RequiredItem>
          <ModelTypeIcon type={'imageoptionsmultiple'} size="large" />
          <RequiredItemTitle>Image Options Multiple</RequiredItemTitle>
        </RequiredItem>
      </RequiredItemsList>
    </NoFormRequired>
  </Wrapper>
)

export default Form
