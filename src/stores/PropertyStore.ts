import { Store } from 'laco'
import PropertyStoreInterface from '../types/PropertyStoreInterface'
import propertyStoreDefaults from './property/propertyStoreDefaults'
import propertyStoreInit from './property/propertyStoreInit'

export const initPropertyStore = (values: Partial<PropertyStoreInterface>) => {
  const initializedValues = propertyStoreInit(values)
  PropertyStore.set(() => initializedValues)
}

const PropertyStore = new Store({ ...propertyStoreDefaults })

export default PropertyStore
