import { Store } from 'laco'
import PropertyStoreInterface from '../types/PropertyStoreInterface'
import propertyStoreDefaults from './propertyStore/propertyStoreDefaults'
import propertyStoreInit from './propertyStore/propertyStoreInit'

export const initPropertyStore = (values: Partial<PropertyStoreInterface>) => {
  const initializedValues = propertyStoreInit(values)
  PropertyStore.set(() => initializedValues)
}

const PropertyStore = new Store({ ...propertyStoreDefaults })

export default PropertyStore
