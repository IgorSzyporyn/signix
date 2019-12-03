import React, { useState } from 'react'
import styled from 'styled-components'
import ModelInterface from '../../types/ModelInterface'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.h4`
  margin: 0;
`
type LayerPanelTitleProps = {
  model: ModelInterface
}

const LayerPanelTitle = ({ model }: LayerPanelTitleProps) => {
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(model.name)

  return (
    <Wrapper>
      {edit ? (
        <input
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
      ) : (
        <Title
          onClick={e => {
            if (e.type === 'keypress' && e.currentTarget.focus) {
              setEdit(true)
            }
          }}
        >
          {name}
        </Title>
      )}
    </Wrapper>
  )
}

export default LayerPanelTitle
