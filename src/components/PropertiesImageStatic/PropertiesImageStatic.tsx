import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyDimension from '../PropertyDimension/PropertyDimension'
import PropertyImageStatic from '../PropertyImageStatic/PropertyImageStatic'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesImageStatic = (props: PropertiesPropTypes) => (
  <>
    <PropertyImageStatic {...props} />
    <PropertyDimension disallowDisable={true} {...props} />
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
  </>
)

export default PropertiesImageStatic
