import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import styled from 'styled-components'
import updateItemInModelStore from '../../stores/model/updateItemInModelStore'
import ModelInterface from '../../types/ModelInterface'
import ModelOptionsInterface from '../../types/ModelOptionsInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldImagePicker from '../FieldImagePicker/FieldImagePicker'
import FieldInput from '../FieldInput/FieldInput'
import MUIcon from '../MUIcon/MUIcon'

const updateDefaultInOptions = (options: ModelOptionsInterface[], checkedIndex: number) => {
  const newOptions: ModelOptionsInterface[] = [...options]

  options.forEach((option, index) => {
    option.default = index === checkedIndex
    newOptions[index] = option
  })

  return newOptions
}

const setNewDefaultOption = (options: ModelOptionsInterface[]) => {
  const newOptions: ModelOptionsInterface[] = [...options]

  if (newOptions[0]) {
    newOptions[0].default = true
  }

  return newOptions
}

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing);
`

const OptionKeyValue = styled.div`
  flex-grow: 1;
`

type PropertyOptionsOptionsProps = {
  model: ModelInterface
}

const PropertyOptionsOptions = ({ model }: PropertyOptionsOptionsProps) => {
  const { options } = model

  return (
    <div>
      {options &&
        options.map((option, index) => {
          return (
            <Option>
              <OptionKeyValue>
                <FieldInput
                  rootStyle={{ marginBottom: 'var(--gutter)' }}
                  label="Option"
                  value={option.question}
                  onChange={e => {
                    const question = e.currentTarget.value
                    const newOptions = [...options]
                    newOptions[index] = { ...newOptions[index], question }

                    updateItemInModelStore({ id: model.id, options: newOptions })
                  }}
                />
                {model.coreType === 'text' && (
                  <FieldInput
                    rootStyle={{ marginBottom: 'var(--half-gutter)' }}
                    label="Value"
                    value={option.value}
                    onChange={e => {
                      const value = e.currentTarget.value
                      const newOptions = [...options]
                      newOptions[index] = { ...newOptions[index], value }

                      updateItemInModelStore({ id: model.id, options: newOptions })
                    }}
                  />
                )}
                {model.coreType === 'image' && (
                  <FieldImagePicker
                    rootStyle={{ marginBottom: 'var(--half-gutter)' }}
                    label="Value"
                    value={option.value}
                    onSelectChange={response => {
                      if (response) {
                        const value = response.path

                        const newOptions = [...options]
                        newOptions[index] = { ...newOptions[index], value }

                        updateItemInModelStore({ id: model.id, options: newOptions })
                      }
                    }}
                  />
                )}
                <FieldCheckbox
                  inline
                  rootStyle={{ marginBottom: 0 }}
                  label="Default"
                  checked={option.default}
                  onChange={e => {
                    const { checked } = e.currentTarget

                    if (checked) {
                      const newOptions = updateDefaultInOptions(options, index)
                      updateItemInModelStore({ id: model.id, options: newOptions })
                    }
                  }}
                />
              </OptionKeyValue>
              <MUIcon
                interactive
                hoverColor="var(--color-red)"
                style={{ marginLeft: 'var(--spacing)' }}
                size="large"
                onClick={() => {
                  let newOptions = [...options]
                  newOptions.splice(index, 1)

                  if (option.default) {
                    newOptions = setNewDefaultOption(newOptions)
                  }

                  updateItemInModelStore({ id: model.id, options: newOptions })
                }}
                render={p => <DeleteIcon {...p} />}
              />
            </Option>
          )
        })}
    </div>
  )
}

export default PropertyOptionsOptions
