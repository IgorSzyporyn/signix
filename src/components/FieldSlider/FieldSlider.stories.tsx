import React from 'react'
import FieldSlider from './FieldSlider'
import '../../baseline.css'

export default {
  component: FieldSlider,
  title: 'Components|FieldSlider'
}

export const Default = () => <FieldSlider />

export const WithTitle = () => <FieldSlider title="Here label title" />

export const Disabled = () => <FieldSlider disabled={true} title="Disabled field" />

export const Hidden = () => <FieldSlider hidden={true} title="Disabled field" />
