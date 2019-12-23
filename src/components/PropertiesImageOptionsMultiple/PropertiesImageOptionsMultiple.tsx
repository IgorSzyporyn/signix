import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyOptions from '../PropertyOptions/PropertyOptions'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesImageOptionsMultiple = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyOptions {...props} />
  </>
)

export default PropertiesImageOptionsMultiple
