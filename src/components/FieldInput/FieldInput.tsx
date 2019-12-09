import React, { InputHTMLAttributes } from 'react'
import withField from '../../hoc/withField'

const FieldInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />
}

FieldInput.defaultProps = {
  type: 'text',
  size: 4
}

export default withField(FieldInput)
