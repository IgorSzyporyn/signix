import ModelInterfacePartial from '../../types/ModelInterfacePartial'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import ModelStore from '../ModelStore'

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

  const { model }: ModelStoreInterface = ModelStore.get()

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
