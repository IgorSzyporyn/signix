import React from 'react'
import ApiErrorList from './ApiErrorList'
import '../../baseline.css'

export default {
  component: ApiErrorList,
  title: 'Components|ApiErrorList'
}

export const Default = () => <ApiErrorList errors={[]} />
