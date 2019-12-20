import React from 'react'
import styled from 'styled-components'
import withField, { WithFieldProps } from '../../hoc/withField'
import ApiEnumerationInterface from '../../types/ApiEnumerationInterface'
import { uniqueId } from '../../utils/utilities'
import FieldInput from '../FieldInput/FieldInput'

const Wrapper = styled.div``

type FieldEnumerationProps = {
  enumeration?: ApiEnumerationInterface[]
} & WithFieldProps

const FieldEnumeration = ({ enumeration = [], ...props }: FieldEnumerationProps) => {
  return (
    <Wrapper>
      {enumeration.map(item => {
        let Item: React.ReactNode = null

        switch (item.type) {
          case 'image':
            Item = (
              <FieldInput
                key={`FieldEnumeration-${item.type}-${uniqueId()}`}
                value={item.value}
                label={`Value for key - "${item.key}"`}
              />
            )
            break
          case 'text':
            Item = (
              <FieldInput
                key={`FieldEnumeration-${item.type}-${uniqueId()}`}
                value={item.value}
                label={`Value for key - "${item.key}"`}
              />
            )
            break
          default:
            break
        }

        return Item
      })}
    </Wrapper>
  )
}

export default withField(FieldEnumeration)
