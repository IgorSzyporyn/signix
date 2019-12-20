import React from 'react'
import FieldCheckbox from './FieldCheckbox'
import '../../baseline.css'

export default {
  component: FieldCheckbox,
  title: 'Components|FieldCheckbox'
}

export const Default = () => <FieldCheckbox />
export const WithTitle = () => <FieldCheckbox title="Here label title" />
export const Inline = () => <FieldCheckbox title="Here label title" inline={true} />
