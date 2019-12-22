import React from 'react'
import withField, { WithFieldProps } from '../../hoc/withField'
import ApiEnumerationInterface from '../../types/ApiEnumerationInterface'
import { uniqueId } from '../../utils/utilities'
import FieldInput from '../FieldInput/FieldInput'

type FieldEnumerationProps = {
  enumeration?: ApiEnumerationInterface[]
} & WithFieldProps

const FieldEnumeration = ({ enumeration = [], ...props }: FieldEnumerationProps) => {
  return (
    <div>
      {enumeration.map(item => {
        let Item: React.ReactNode = null

        switch (item.type) {
          case 'image':
            Item = (
              <FieldInput
                key={`FieldEnumeration-${item.type}-${uniqueId()}`}
                value={item.value}
                label={`Value for "${item.key}"`}
              />
            )
            break
          case 'text':
            Item = (
              <FieldInput
                key={`FieldEnumeration-${item.type}-${uniqueId()}`}
                value={item.value}
                label={`Value for "${item.key}"`}
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
