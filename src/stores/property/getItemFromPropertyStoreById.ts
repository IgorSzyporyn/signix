import PropertyStore, { PropertyStoreInterface } from '../PropertyStore'

const getItemFromPropertyStoreById = (id: string) => {
  const store: PropertyStoreInterface = PropertyStore.get()

  return store[id]
}

export default getItemFromPropertyStoreById
