import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyBackground from '../PropertyBackground/PropertyBackground'

const PropertiesGroup = (props: PropertiesPropTypes) => (
  <>
    <PropertyBackground {...props} />
  </>
)

export default PropertiesGroup
