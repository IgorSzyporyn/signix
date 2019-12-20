import React from 'react'
import FieldPositionType from './FieldPositionType'
import '../../baseline.css'

export default {
  component: FieldPositionType,
  title: 'Components|FieldPositionType'
}

export const Default = () => <FieldPositionType />

export const WithTitle = () => <FieldPositionType title="Here label title" />

export const Disabled = () => <FieldPositionType disabled={true} title="Disabled field" />

export const Hidden = () => <FieldPositionType hidden={true} title="Disabled field" />
