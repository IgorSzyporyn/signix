import React, { InputHTMLAttributes } from 'react'
import withField from '../../hoc/withField'

const FieldInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} size={4} />
}

FieldInput.defaultProps = {
  type: 'text'
}

export default withField(FieldInput)
