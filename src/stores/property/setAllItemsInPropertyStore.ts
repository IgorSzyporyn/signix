import PropertyStore from '../PropertyStore'

const setAllItemsInPropertyStore = (expanded: boolean) => {
  const items = PropertyStore.get()

  Object.keys(items).forEach(key => {
    items[key] = expanded
  })

  PropertyStore.set(() => items)
}

export default setAllItemsInPropertyStore
