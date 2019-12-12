import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesTextDynamic = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
  </>
)

export default PropertiesTextDynamic
