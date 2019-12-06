import ModelInterface from '../../types/ModelInterface'
import ModelStore, { ModelStoreInterface } from '../ModelStore'
import ModelInterfacePartial from '../../types/ModelInterfacePartial'
import mergeModels from '../../utils/mergeModels'

const a = (items: ModelInterfacePartial[], updateItem: ModelInterface) => {
  return items.map(item => {
    if (item.id === updateItem.id) {
      item = mergeModels(item, updateItem)
    } else if (item.items && item.items.length) {
      item.items = a(item.items, updateItem)
    }

    return item
  })
}

const updateItemInModelStore = (updateItem: ModelInterface) => {
  let { model }: ModelStoreInterface = ModelStore.get()

  // Go through model and find the relevant item to update and update it
  if (model.id === updateItem.id) {
    model = mergeModels(model, updateItem)
  } else {
    model.items = a(model.items, updateItem)
  }

  ModelStore.set(() => ({ model }))
}

export default updateItemInModelStore
