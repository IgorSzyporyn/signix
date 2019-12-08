import PropertyStore from '../PropertyStore'

const removeItemFromPropertyStore = (id: string) => {
  const store = PropertyStore.get()
  const clone = { ...store }

  delete clone[id]

  PropertyStore.set(() => clone)
}

export default removeItemFromPropertyStore
