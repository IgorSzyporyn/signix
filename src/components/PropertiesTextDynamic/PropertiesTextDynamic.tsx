import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyFont from '../PropertyFont/PropertyFont'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesTextDynamic = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyFont {...props} />
  </>
)

export default PropertiesTextDynamic
