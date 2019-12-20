import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import LayerItemInner from '../LayerItemInner/LayerItemInner'

type WrapperProps = {
  isHidden?: boolean
  isDisabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  ${({ isHidden, isDisabled }) => {
    return isHidden || isDisabled ? 'opacity: 0.6;' : null
  }}
`

type LayerItemProps = {
  model: ModelInterface
}

const LayerItem = (props: LayerItemProps) => {
  const { model } = props

  return (
    <Wrapper isHidden={model.hidden} isDisabled={model.disabled}>
      <LayerItemInner {...props} />
    </Wrapper>
  )
}

export default LayerItem
