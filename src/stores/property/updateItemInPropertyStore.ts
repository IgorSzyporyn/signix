import PropertyStore from '../PropertyStore'

const updateItemInPropertyStore = (expanded: boolean, id?: string) => {
  if (id) {
    PropertyStore.set(() => ({ [id]: expanded }))
  }
}

export default updateItemInPropertyStore
