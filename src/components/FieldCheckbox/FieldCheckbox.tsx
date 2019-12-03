import React, { InputHTMLAttributes } from 'react'
import withField from '../../hoc/withField'

const FieldCheckbox = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input type="checkbox" {...props} />
)

export default withField(FieldCheckbox)
