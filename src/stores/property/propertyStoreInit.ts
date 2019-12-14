import PropertyStoreInterface from '../../types/PropertyStoreInterface'
import propertyStoreDefaults from './propertyStoreDefaults'

const propertyStoreInit = (source: Partial<PropertyStoreInterface>) => {
  const settings: PropertyStoreInterface = {
    ...propertyStoreDefaults,
    ...source
  }

  return settings
}

export default propertyStoreInit
