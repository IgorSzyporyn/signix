import ModelInterfacePartial from '../../types/ModelInterfacePartial'
import mergeModels from '../../utils/mergeModels'
import ModelStore from '../ModelStore'
import ModelStoreInterface from '../../types/ModelStoreInterface'

const a = (model: ModelInterfacePartial, updateItem: ModelInterfacePartial) => {
  return model.items!.map(item => {
    if (item.id === updateItem.id) {
      updateItem.type = item.type
      item = mergeModels(item, updateItem)
    } else if (item.items && item.items.length) {
      item.items = a(item, updateItem)
    }

    return item
  })
}

const updateItemInModelStore = (
  updateItem: Omit<ModelInterfacePartial, 'type'>
) => {
  let { model }: ModelStoreInterface = ModelStore.get()
  let item = { type: model.type, ...updateItem }

  if (model.id === item.id) {
    model = mergeModels(model, item)
  } else {
    model.items = a(model, item)
  }

  ModelStore.set(() => ({ model }))
}

export default updateItemInModelStore
