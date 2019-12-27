import AutorenewIcon from '@material-ui/icons/Autorenew'
import Downshift from 'downshift'
import { useStore } from 'laco-react'
import React, { InputHTMLAttributes, Suspense, useState } from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import styled from 'styled-components'
import withField from '../../hoc/withField'
import UserStore from '../../stores/UserStore'
import UserInterface from '../../types/UserInterface'
import FieldImagePickerItems from '../FieldImagePickerItems/FieldImagePickerItems'
import MUIcon from '../MUIcon/MUIcon'

const getSplitFromValue = (value: string) => {
  const valueSplit: string[] | undefined = value.split('/').filter(a => a)

  return valueSplit
}

const getFolderFromValue = (value: string) => {
  let folder = ''
  let valueSplit = getSplitFromValue(value)

  if (valueSplit.length > 1) {
    valueSplit = valueSplit.slice(0, -1)
  }

  folder = valueSplit.join('/')

  return folder
}

const getFileFromValue = (value: string) => {
  let file: string | undefined = ''
  let valueSplit = getSplitFromValue(value)

  file = valueSplit.pop()

  return file
}

const Wrapper = styled.div`
  position: relative;
`

const InputContainer = styled.div`
  position: relative;
`

type PreviewContainerProps = {
  userId: string
  path: string
}

const PreviewContainer = styled.div<PreviewContainerProps>`
  background-image: ${({ userId, path }) =>
    userId && path ? `url(http://localhost:8001/users/${userId}/${path})` : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 4px;
  left: 13px;
`

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  animation: spin 1s linear infinite;
`

const Menu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  border-left: 0.1rem solid var(--color-lighter);
  border-right: 0.1rem solid var(--color-lighter);
  border-bottom: 0.1rem solid var(--color-lighter);
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  background-color: var(--color-dark);
  height: 20rem;
  margin: 0;
  padding: 0;
  margin-top: -0.1rem;
  list-style: none;
  z-index: 1;
`

type FieldImagePickerProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string
  onSelectChange?: (value?: string) => void
}

const FieldImagePicker = ({ value, onSelectChange }: FieldImagePickerProps) => {
  const { id: userId }: UserInterface = useStore(UserStore)
  const _folder = getFolderFromValue(value || '')
  const [folder, setFolder] = useState(_folder)
  const initialInputValue = getFileFromValue(value || '')
  let isChangingFolder = false

  return (
    <Wrapper>
      <Downshift
        initialInputValue={initialInputValue}
        itemToString={item => (item ? item.name : '')}
        onStateChange={(state, helpers) => {
          const { selectedItem, inputValue } = state
          const isDirectory = selectedItem && selectedItem.type === 'directory'
          const isSelection =
            state.type === '__autocomplete_click_item__' ||
            state.type === '__autocomplete_keydown_enter__' ||
            (inputValue === '' && state.type === '__autocomplete_unknown__')

          if (isSelection && isDirectory) {
            isChangingFolder = true
            helpers.openMenu()
            helpers.clearSelection()
            setFolder(selectedItem.path)
          }

          if (isChangingFolder) {
            helpers.openMenu()
          }

          if (!isChangingFolder && isSelection && !isDirectory) {
            onSelectChange && onSelectChange(selectedItem ? selectedItem.path : '')
          }
        }}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
          getToggleButtonProps,
          clearSelection,
          openMenu
        }) => {
          const { onClick: onToggleClick } = getToggleButtonProps()

          return (
            <div>
              <InputContainer>
                <PreviewContainer path={value as string} userId={userId} />
                <input
                  {...getInputProps()}
                  style={{
                    width: '100%',
                    borderBottomLeftRadius: isOpen ? '0' : '0.3rem',
                    borderBottomRightRadius: isOpen ? '0' : '0.3rem',
                    borderBottomColor: isOpen ? 'transparent' : 'var(--color-lighter)',
                    paddingLeft: '5.6rem'
                  }}
                  onClick={onToggleClick}
                />
                <MUIcon
                  interactive
                  title="Clear Selection"
                  style={{ position: 'absolute', right: '12px', top: '13px' }}
                  size="normal"
                  render={p => (
                    <HighlightOffIcon
                      {...p}
                      onClick={() => {
                        clearSelection()
                        if (isOpen) {
                          openMenu()
                        }
                      }}
                    />
                  )}
                />
              </InputContainer>
              {isOpen && (
                <Menu {...getMenuProps()}>
                  <SpinnerContainer>
                    <Spinner>
                      <MUIcon size="huge" render={p => <AutorenewIcon {...p} />} />
                    </Spinner>
                  </SpinnerContainer>
                  <Suspense fallback={<></>}>
                    <FieldImagePickerItems
                      userId={userId}
                      folder={folder}
                      getItemProps={getItemProps}
                      highlightedIndex={highlightedIndex}
                      selectedItem={selectedItem}
                      inputValue={inputValue}
                    />
                  </Suspense>
                </Menu>
              )}
            </div>
          )
        }}
      </Downshift>
    </Wrapper>
  )
}

export default withField(FieldImagePicker)
