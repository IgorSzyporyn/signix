import PropertyStore from '../PropertyStore'

const addItemToPropertyStore = (expanded: boolean, id: string) => {
  PropertyStore.set(() => ({ [id]: expanded }))
}

export default addItemToPropertyStore
