import { useStore } from 'laco-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import getFontSize from '../../utils/getFontSize'
import ApiErrorList from '../ApiErrorList/ApiErrorList'
import Button from '../Button/Button'
import apiValidateLayers from '../../utils/apiValidateLayers'

const Wrapper = styled.div`
  font-size: ${getFontSize('xsmall')};
  min-width: 48rem;
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin-bottom: var(--spacing-huge);
`

const ButtonContainer = styled.div`
  margin-top: var(--spacing-huge);
  display: flex;
  justify-content: flex-end;

  & > * {
    margin-right: var(--gutter);

    &:last-child {
      margin-right: 0;
    }
  }
`

type LayersApiFixingProps = {
  onFixed?: (fixed: boolean) => void
}

const LayersApiFixing = ({ onFixed }: LayersApiFixingProps) => {
  const errorStore: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)

  const [fixing, setFixing] = useState(false)
  const [tested, setTested] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  return (
    <Wrapper>
      <Title>Attempt Auto Fix For These Layers</Title>
      {Object.keys(errorStore).map(modelId => {
        const errors = errorStore[modelId]

        let title = errors.length > 0 ? errors[0].name : ''

        return <ApiErrorList title={title} errors={errors} />
      })}
      <ButtonContainer>
        {!tested && (
          <Button
            variant="primary"
            disabled={fixing}
            onClick={() => {
              setFixing(true)
              apiValidateLayers(valid => {
                setTested(true)
              })
            }}
          >
            Attempt AutoFix
          </Button>
        )}
        <Button
          variant="primary"
          disabled={fixing}
          onClick={() => {
            onFixed && onFixed(isFixed)
          }}
        >
          OK
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default LayersApiFixing
