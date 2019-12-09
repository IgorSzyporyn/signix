import React from 'react'
import FieldColor from './FieldColor'
import '../../baseline.scss'

export default {
  component: FieldColor,
  title: 'Components|FieldColor'
}

export const Default = () => <FieldColor />

export const WithTitle = () => <FieldColor title="Here label title" />

export const Disabled = () => (
  <FieldColor disabled={true} title="Disabled field" />
)

export const Hidden = () => <FieldColor hidden={true} title="Disabled field" />
