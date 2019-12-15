import React from 'react'
import FieldOptions from './FieldOptions'
import '../../baseline.css'

export default {
  component: FieldOptions,
  title: 'Components|FieldOptions'
}

export const Default = () => <FieldOptions />

export const WithTitle = () => <FieldOptions title="Here label title" />

export const Disabled = () => (
  <FieldOptions disabled={true} title="Disabled field" />
)

export const Hidden = () => (
  <FieldOptions hidden={true} title="Disabled field" />
)
