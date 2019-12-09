import ModelStore, { ModelStoreInterface } from '../ModelStore'
import ModelInterfacePartial from '../../types/ModelInterfacePartial'

const searchAndDestroy = (items: ModelInterfacePartial[], id: string) => {
  return items.filter(item => {
    if (item.items && item.items.length) {
      item.items = searchAndDestroy(item.items, id)
    }

    return item.id !== id
  })
}

const deleteItemInModelStore = (id?: string) => {
  if (!id) {
    return false
  }

  const { model } = ModelStore.get()

  if (model.id === id) {
    return false
  }

  model.items = searchAndDestroy(model.items, id)

  ModelStore.set((state: ModelStoreInterface) => ({
    ...state,
    model
  }))

  return true
}

export default deleteItemInModelStore
