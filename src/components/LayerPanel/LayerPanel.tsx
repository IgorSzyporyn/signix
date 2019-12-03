import React, { useState } from 'react'
import styled from 'styled-components'
import MinusCircleIcon from '../../icons/MinusCircleIcon/MinusCircleIcon'
import PlusCircleIcon from '../../icons/PlusCircleIcon/PlusCircleIcon'
import ModelInterface from '../../types/ModelInterface'
import LayerPanelGroup from '../LayerPanelGroup/LayerPanelGroup'
import LayerPanelProperties from '../LayerPanelProperties/LayerPanelProperties'
import LayerPanelTitle from '../LayerPanelTitle/LayerPanelTitle'

type LayerPanelProps = {
  children?: React.ReactNode
  model: ModelInterface
}

const Wrapper = styled.div``

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const Title = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`

type BodyProps = {
  expanded: boolean
}

const Body = styled.div`
  font-size: 1.2rem;

  ${({ expanded }: BodyProps) => {
    return expanded ? null : 'display: none;'
  }}
`

const LayerPanel = ({ model, children }: LayerPanelProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Wrapper>
      <Heading>
        {expanded ? (
          <MinusCircleIcon
            onClick={() => {
              setExpanded(!expanded)
            }}
            width={12}
            height={12}
          />
        ) : (
          <PlusCircleIcon
            onClick={() => {
              setExpanded(!expanded)
            }}
            width={12}
            height={12}
          />
        )}
        <Title>
          <LayerPanelTitle model={model} />
        </Title>
      </Heading>
      <Body expanded={expanded}>
        <LayerPanelProperties model={model}>{children}</LayerPanelProperties>
        {model.items && model.items.length > 0 && (
          <LayerPanelGroup model={model} />
        )}
      </Body>
    </Wrapper>
  )
}

export default LayerPanel
