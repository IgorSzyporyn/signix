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

type OptionsListProps = {
  isOpen?: boolean
}

const OptionsList = styled.ul<OptionsListProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  border-left: 0.1rem solid var(--color-lighter);
  border-right: 0.1rem solid var(--color-lighter);
  border-bottom: 0.1rem solid var(--color-lighter);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

const OptionsListItem = styled.li`
  font-size: ${getFontSize('xsmall')};
  padding: var(--half-gutter) var(--gutter);
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
          <div>
            {searchable ? (
              <input {...getInputProps()} {...props} />
            ) : (
              <div className={`FieldInput ${isOpen ? 'open' : ''}`} onClick={onToggleClick}>
                {simpleType ? selectedItem : selectedItem.value}
              </div>
            )}

            <OptionsList isOpen={isOpen} {...getMenuProps()}>
              {isOpen
                ? options.map((item, index) => {
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
                  })
                : null}
            </OptionsList>
          </div>
        )
      }}
    </Downshift>
  )
}

export default withField(FieldOptions)
