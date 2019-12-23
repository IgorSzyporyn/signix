import React from 'react'
import withField, { WithFieldProps } from '../../hoc/withField'
import ApiEnumerationInterface from '../../types/ApiEnumerationInterface'
import { uniqueId } from '../../utils/utilities'
import FieldInput from '../FieldInput/FieldInput'

type FieldEnumerationProps = WithFieldProps & {
  enumeration?: ApiEnumerationInterface[]
  hidden?: boolean
  onChange?: (enumeration: ApiEnumerationInterface[]) => void
}

const FieldEnumeration = ({ enumeration = [], onChange, hidden }: FieldEnumerationProps) => {
  const enumClone: ApiEnumerationInterface[] = [...enumeration]

  console.log('re-rendering field enumeratioins')

  return (
    <div hidden={hidden}>
      {enumClone.map((item, index) => {
        let Item: React.ReactNode = null

        switch (item.type) {
          case 'image':
            Item = (
              <FieldInput
                key={`FieldEnumeration-${item.type}-${uniqueId()}`}
                value={item.value}
                label={`Value for "${item.key}"`}
                onChange={e => {
                  const value = e.currentTarget.value
                  enumClone[index] = { ...item, value }
                  onChange && onChange(enumClone)
                }}
              />
            )
            break
          case 'text':
            Item = (
              <FieldInput
                key={`FieldEnumeration-${item.type}-${uniqueId()}`}
                value={item.value}
                label={`Value for "${item.key}"`}
                onChange={e => {
                  const value = e.currentTarget.value
                  enumClone[index] = { ...item, value }
                  onChange && onChange(enumClone)
                }}
              />
            )
            break
          default:
            break
        }

        return Item
      })}
    </div>
  )
}

export default withField(FieldEnumeration)
