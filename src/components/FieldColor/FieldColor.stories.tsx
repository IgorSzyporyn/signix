import React from 'react'
import FieldColor from './FieldColor'
import '../../baseline.css'

export default {
  component: FieldColor,
  title: 'Components|FieldColor'
}

export const Default = () => <FieldColor />

export const WithColorSet = () => <FieldColor title="Here label title" color="#ff0000" />

export const Disabled = () => <FieldColor disabled={true} title="Disabled field" />

export const Hidden = () => <FieldColor hidden={true} title="Disabled field" />
