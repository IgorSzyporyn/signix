import { Store } from 'laco'

export type PropertyStoreInterface = {
  [key: string]: boolean
}

const defaultStore: PropertyStoreInterface = {
  dimension: false,
  position: false,
  color: false,
  backgroundImage: true
}

const PropertyStore = new Store(defaultStore)

const clone: any = window
clone.C = PropertyStore

export default PropertyStore
