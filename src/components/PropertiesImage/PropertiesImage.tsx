import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyDimension from '../PropertyDimension/PropertyDimension'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesImage = (props: PropertiesPropTypes) => (
  <>
    <PropertyDimension {...props} />
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
  </>
)

export default PropertiesImage
