import React from 'react'
import FieldInput from './FieldInput'
import '../../baseline.scss'

export default {
  component: FieldInput,
  title: 'Components|FieldInput'
}

export const Default = () => <FieldInput />

export const WithTitle = () => <FieldInput title="Here label title" />

export const Disabled = () => (
  <FieldInput disabled={true} title="Disabled field" />
)

export const Hidden = () => <FieldInput hidden={true} title="Disabled field" />
