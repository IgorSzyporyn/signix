import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyDimension from '../PropertyDimension/PropertyDimension'
import PropertyPosition from '../PropertyPosition/PropertyPosition'
import PropertyTextStatic from '../PropertyTextStatic/PropertyTextStatic'

const PropertiesText = (props: PropertiesPropTypes) => (
  <>
    <PropertyDimension {...props} />
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyTextStatic {...props} />
  </>
)

export default PropertiesText
