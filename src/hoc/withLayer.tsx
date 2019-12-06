import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import MinusCircleIcon from '../icons/MinusCircleIcon/MinusCircleIcon'
import PlusCircleIcon from '../icons/PlusCircleIcon/PlusCircleIcon'
import updateItemInLayerStore from '../stores/layer/updateItemInLayerStore'
import LayerStore, { LayerStoreInterface } from '../stores/LayerStore'
import ModelInterface from '../types/ModelInterface'
import LayerTitle from '../components/LayerTitle/LayerTitle'

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--half-gutter);
`

const Title = styled.div`
  flex-grow: 1;
  margin-left: var(--half-gutter);
`

export interface WithLayerProps {
  model: ModelInterface
  className?: string
}

const withLayer = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLayerHOC extends React.Component<P & WithLayerProps> {
    render() {
      const { children, model, ...rest } = this.props
      const modelId = model.id!
      const { [modelId]: expanded }: LayerStoreInterface = useStore(LayerStore)

      const iconProps = {
        width: '1.2rem',
        height: '1.2rem'
      }

      return (
        <Component model={model} {...(rest as P)}>
          <Heading
            onClick={() => {
              updateItemInLayerStore(!expanded, modelId)
            }}
          >
            {expanded ? (
              <MinusCircleIcon {...iconProps} />
            ) : (
              <PlusCircleIcon {...iconProps} />
            )}
            <Title>
              <LayerTitle model={model} />
            </Title>
          </Heading>
          {children}
        </Component>
      )
    }
  }

export default withLayer
