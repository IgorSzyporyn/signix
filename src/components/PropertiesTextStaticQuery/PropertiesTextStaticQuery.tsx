import React from 'react'
import PropertiesPropTypes from '../../types/PropertiesPropTypes'
import PropertyColor from '../PropertyColor/PropertyColor'
import PropertyPosition from '../PropertyPosition/PropertyPosition'
import PropertyApiKey from '../PropertyApiKey/PropertyApiKey'

const PropertiesTextStaticQuery = (props: PropertiesPropTypes) => (
  <>
    <PropertyPosition {...props} />
    <PropertyColor {...props} />
    <PropertyApiKey {...props} />
  </>
)

export default PropertiesTextStaticQuery
