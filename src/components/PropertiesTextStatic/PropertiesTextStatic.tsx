import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyFont from '../PropertyFont/PropertyFont'
import PropertyPosition from '../PropertyPosition/PropertyPosition'
import PropertyTextStatic from '../PropertyTextStatic/PropertyTextStatic'

const PropertiesTextStatic = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyFont {...props} />
    <PropertyTextStatic {...props} />
  </>
)

export default PropertiesTextStatic
