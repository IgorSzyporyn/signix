import React from 'react'
import styled from 'styled-components'
import ModelPositionTypes from '../../types/ModelPositionTypes'
import FieldPositionType from '../FieldPositionType/FieldPositionType'
import withField, { WithFieldProps } from '../../hoc/withField'

const Wrapper = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;

    &:first-child button {
      border-top-left-radius: var(--quarter-gutter);
      border-bottom-left-radius: var(--quarter-gutter);
      border-right: 0 none;
    }

    &:last-child button {
      border-top-right-radius: var(--quarter-gutter);
      border-bottom-right-radius: var(--quarter-gutter);
      border-left: 0 none;
    }

    &:nth-child(2) button {
      border-right: 0 none;
    }
  }

  & button {
    border-radius: 0;
  }
`

type LayerPropertyPositionTypeProps = WithFieldProps & {
  type: ModelPositionTypes
  onChange: (type: ModelPositionTypes) => void
}

const LayerPropertyPositionType = ({
  type,
  onChange
}: LayerPropertyPositionTypeProps) => (
  <Wrapper>
    <FieldPositionType
      onClick={e => {
        onChange('top-left')
      }}
      active={type === 'top-left' ? 'true' : 'false'}
    >
      TL
    </FieldPositionType>
    <FieldPositionType
      onClick={e => {
        onChange('top-right')
      }}
      active={type === 'top-right' ? 'true' : 'false'}
    >
      TR
    </FieldPositionType>
    <FieldPositionType
      onClick={e => {
        onChange('bottom-left')
      }}
      active={type === 'bottom-left' ? 'true' : 'false'}
    >
      BL
    </FieldPositionType>
    <FieldPositionType
      onClick={e => {
        onChange('bottom-right')
      }}
      active={type === 'bottom-right' ? 'true' : 'false'}
    >
      BR
    </FieldPositionType>
  </Wrapper>
)

export default withField(LayerPropertyPositionType)
