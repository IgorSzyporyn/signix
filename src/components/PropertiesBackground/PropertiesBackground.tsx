import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyBackground from '../PropertyBackground/PropertyBackground'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyDimension from '../PropertyDimension/PropertyDimension'

const PropertiesBackground = (props: PropertiesPropTypes) => (
  <>
    <PropertyDimension {...props} />
    <PropertyColor {...props} />
    <PropertyBackground {...props} />
  </>
)

export default PropertiesBackground
