import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyBackground from '../PropertyBackground/PropertyBackground'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyDimension from '../PropertyDimension/PropertyDimension'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesGroup = (props: PropertiesPropTypes) => (
  <>
    <PropertyDimension {...props} />
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyBackground {...props} />
  </>
)

export default PropertiesGroup
