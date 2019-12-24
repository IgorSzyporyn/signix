import React from 'react'
import FieldImagePicker from './FieldImagePicker'
import '../../baseline.css'

export default {
  component: FieldImagePicker,
  title: 'Components|FieldImagePicker'
}

export const Default = () => <FieldImagePicker />

export const WithTitle = () => <FieldImagePicker title="Here label title" />

export const Disabled = () => <FieldImagePicker disabled={true} title="Disabled field" />

export const Hidden = () => <FieldImagePicker hidden={true} title="Disabled field" />
