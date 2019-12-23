import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyPosition from '../PropertyPosition/PropertyPosition'
import PropertyImageStatic from '../PropertyImageStatic/PropertyImageStatic'

const PropertiesImageStatic = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyImageStatic {...props} />
  </>
)

export default PropertiesImageStatic
