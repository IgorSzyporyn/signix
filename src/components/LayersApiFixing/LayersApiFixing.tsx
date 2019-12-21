import { useStore } from 'laco-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import apiFixLayers from '../../utils/apiFixLayers'
import getFontSize from '../../utils/getFontSize'
import { uniqueId } from '../../utils/utilities'
import ApiErrorList from '../ApiErrorList/ApiErrorList'
import Button from '../Button/Button'

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
  onClose?: () => void
}

const LayersApiFixing = ({ onClose }: LayersApiFixingProps) => {
  const { errors, fixed, attempedFixed }: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)

  const [fixing, setFixing] = useState(false)

  return (
    <Wrapper>
      <Title>Attempt Auto Fix For These Layers</Title>
      {fixed ? (
        <div>I'm fixed</div>
      ) : (
        Object.keys(errors).map((key: string) => {
          const layerErrors = errors[key]
          const title = layerErrors.length > 0 ? layerErrors[0].name : ''

          return (
            <ApiErrorList
              key={`LayersApiFixing-error-${uniqueId()}`}
              title={title}
              errors={layerErrors}
            />
          )
        })
      )}
      <ButtonContainer>
        {!fixed && (
          <Button
            variant="primary"
            disabled={fixing || attempedFixed}
            onClick={() => {
              setFixing(true)
              apiFixLayers(() => {
                setFixing(false)
              })
            }}
          >
            Attempt AutoFix
          </Button>
        )}
        <Button
          variant={fixed ? 'primary' : 'normal'}
          disabled={fixing}
          onClick={() => {
            onClose && onClose()
          }}
        >
          Close
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default LayersApiFixing
