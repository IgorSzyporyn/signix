import React from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'
import LayerItemInner from '../LayerItemInner/LayerItemInner'

const Wrapper = styled.div``

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

type LayerItemProps = {
  model: ModelInterface
}

const LayerItem = (props: LayerItemProps) => {
  const { model } = props

  return (
    <Wrapper>
      {model.level === 0 ? (
        <List>
          <LayerItemInner {...props} />
        </List>
      ) : (
        <LayerItemInner {...props} />
      )}
    </Wrapper>
  )
}

export default LayerItem
