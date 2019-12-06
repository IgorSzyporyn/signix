import React, { ButtonHTMLAttributes } from 'react'
import withField from '../../hoc/withField'

const FieldPositionType = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} />
}

export default withField(FieldPositionType)
