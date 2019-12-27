import Downshift from 'downshift'
import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import withField from '../../hoc/withField'
import FieldOptionsOptionType from '../../types/FieldOptionsOptionType'
import getFontSize from '../../utils/getFontSize'

const getOptionsType = (options: FieldOptionsOptionType) => {
  let optionsType: OptionsType = 'object'

  if (options.length) {
    const sample = options[0]
    optionsType = typeof sample === 'string' ? 'simple' : 'object'
  }

  return optionsType
}

const OptionsList = styled.ul`
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
  margin: -0.1rem 0 0;
  padding: 0;
  list-style: none;
`

const OptionsListItem = styled.li`
  font-size: ${getFontSize('xsmall')};
  padding: 0.4rem 1.2rem;
  min-height: 3.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`

type OptionsType = 'simple' | 'object'

type FieldOptionsProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string
  options: FieldOptionsOptionType
  searchable?: boolean
  onSelectChange?: (value?: string) => void
}

const FieldOptions = ({ value, options, searchable, ...props }: FieldOptionsProps) => {
  const optionsType = getOptionsType(options)
  const simpleType = optionsType === 'simple'

  return (
    <Downshift
      selectedItem={value}
      onChange={(selection?: string) => props.onSelectChange && props.onSelectChange(selection)}
      itemToString={item => (item ? (simpleType ? item : item.value) : '')}
    >
      {({
        getToggleButtonProps,
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem
      }) => {
        const { onClick: onToggleClick } = getToggleButtonProps()

        return (
          <div style={{ position: 'relative' }}>
            {searchable ? (
              <input
                {...getInputProps()}
                style={{
                  width: '100%',
                  borderBottomLeftRadius: isOpen ? '0' : '0.3rem',
                  borderBottomRightRadius: isOpen ? '0' : '0.3rem',
                  borderBottomColor: isOpen ? 'transparent' : 'var(--color-lighter)'
                }}
                onClick={onToggleClick}
              />
            ) : (
              <div
                className={`FieldInput ${isOpen ? 'open' : ''}`}
                onClick={onToggleClick}
                style={{
                  width: '100%',
                  borderBottomLeftRadius: isOpen ? '0' : '0.3rem',
                  borderBottomRightRadius: isOpen ? '0' : '0.3rem',
                  borderBottomColor: isOpen ? 'transparent' : 'var(--color-lighter)'
                }}
              >
                {simpleType ? selectedItem : selectedItem.value}
              </div>
            )}

            {isOpen && (
              <OptionsList {...getMenuProps()}>
                {options.map((item, index) => {
                  const key = typeof item === 'string' ? item : item.value

                  return (
                    <OptionsListItem
                      {...getItemProps({
                        key,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index
                              ? 'var(--color-active)'
                              : 'var(--color-dark)',
                          color:
                            highlightedIndex === index
                              ? 'var(--color-white)'
                              : 'var(--color-lighter)'
                        }
                      })}
                    >
                      {key}
                    </OptionsListItem>
                  )
                })}
              </OptionsList>
            )}
          </div>
        )
      }}
    </Downshift>
  )
}

export default withField(FieldOptions)
