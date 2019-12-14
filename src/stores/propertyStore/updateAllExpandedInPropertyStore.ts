import PropertyStore from '../PropertyStore'
import PropertyStoreInterface from '../../types/PropertyStoreInterface'

const updateAllExpandedInPropertyStore = (setExpanded: boolean) => {
  const { expanded } = PropertyStore.get()

  Object.keys(expanded).forEach(key => {
    expanded[key] = setExpanded
  })

  PropertyStore.set((state: PropertyStoreInterface) => ({ ...state, expanded }))
}

export default updateAllExpandedInPropertyStore
