import React from 'react'
import FieldImage from './FieldImage'
import '../../baseline.css'

export default {
  component: FieldImage,
  title: 'Components|FieldImage'
}

export const Default = () => <FieldImage />

export const WithTitle = () => <FieldImage title="Here label title" />

export const Disabled = () => (
  <FieldImage disabled={true} title="Disabled field" />
)

export const Hidden = () => <FieldImage hidden={true} title="Disabled field" />
