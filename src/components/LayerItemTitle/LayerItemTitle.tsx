import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import React, { useState } from 'react'
import styled from 'styled-components'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'
import getFontSize from '../../utils/getFontSize'
import FieldInput from '../FieldInput/FieldInput'
import MUIcon from '../MUIcon/MUIcon'

const Wrapper = styled.div`
  font-size: ${getFontSize('small')};
  font-weight: 400;
  display: flex;
  align-items: center;
`

const InputContainer = styled.div`
  flex-grow: 1;
  margin-right: var(--gutter);
`

const TextContainer = styled.div`
  flex-grow: 1;
`

type LayerItemTitleProps = {
  id?: string
  title?: string
  disabled?: boolean
}

const handleEditingInStore = (id?: string) => {
  ModelStore.set((state: ModelStoreInterface) => ({ ...state, editing: id }))
}

const LayerItemTitle = ({ title, id, disabled }: LayerItemTitleProps) => {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(title)

  return (
    <Wrapper
      onDoubleClick={e => {
        if (!disabled) {
          e.stopPropagation()
          handleEditingInStore(id)
          setEditing(true)
        }
      }}
    >
      {editing ? (
        <>
          <InputContainer>
            <FieldInput
              value={name}
              nomargin="true"
              onKeyDown={e => {
                const { keyCode, currentTarget } = e
                const { value } = currentTarget

                if (keyCode === 13) {
                  handleEditingInStore(undefined)
                  updateItemInModelStore({ name: value, id })
                  setEditing(false)
                }
              }}
              onChange={e => {
                setName(e.currentTarget.value)
              }}
            />
          </InputContainer>
          <MUIcon
            interactive={true}
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--color-green)'
            }}
            render={p => (
              <CheckCircleOutlineOutlinedIcon
                onClick={() => {
                  handleEditingInStore(undefined)
                  updateItemInModelStore({ name, id })
                  setEditing(false)
                }}
                {...p}
              />
            )}
          />
        </>
      ) : (
        <TextContainer>{title}</TextContainer>
      )}
    </Wrapper>
  )
}

export default LayerItemTitle
