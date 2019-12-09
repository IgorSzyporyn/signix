import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
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
  title?: string
  disabled?: boolean
  editing?: boolean
  onEditEnd?: (name?: string) => void
}

const LayerItemTitle = ({ title, editing, onEditEnd }: LayerItemTitleProps) => {
  const [name, setName] = useState(title)

  useEffect(() => {
    if (!editing) {
      setName(title)
    }
  }, [editing, title])

  return (
    <Wrapper>
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
                  onEditEnd && onEditEnd(value)
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
                  onEditEnd && onEditEnd(name)
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
