import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyApiKey from '../PropertyApiKey/PropertyApiKey'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyFont from '../PropertyFont/PropertyFont'
import PropertyPosition from '../PropertyPosition/PropertyPosition'

const PropertiesTextStaticQuery = (props: PropertiesPropTypes) => (
  <>
    <PropertyApiKey type="text" {...props} />
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyFont {...props} />
  </>
)

export default PropertiesTextStaticQuery
