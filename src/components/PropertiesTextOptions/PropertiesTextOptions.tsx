import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyFont from '../PropertyFont/PropertyFont'
import PropertyOptions from '../PropertyOptions/PropertyOptions'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesTextOptions = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyFont {...props} />
    <PropertyOptions {...props} />
  </>
)

export default PropertiesTextOptions
