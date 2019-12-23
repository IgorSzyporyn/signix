import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyApiKey from '../PropertyApiKey/PropertyApiKey'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyFont from '../PropertyFont/PropertyFont'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesTextStaticQuery = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyFont {...props} />
    <PropertyApiKey type="text" {...props} />
  </>
)

export default PropertiesTextStaticQuery
