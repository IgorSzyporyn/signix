import ModelStore, { ModelStoreInterface } from '../ModelStore'
import LayerStore, { LayerStoreInterface } from '../LayerStore'
import ModelInterface from '../../types/ModelInterface'

const getValuesByTraversing = (
  model: ModelInterface,
  storeItems: LayerStoreInterface,
  expanded: boolean
) => {
  let newStoreItems: LayerStoreInterface = { ...storeItems }

  if (model.id) {
    newStoreItems[model.id] = expanded
  }

  if (model.items && model.items.length) {
    model.items.forEach(item => {
      const newItems = getValuesByTraversing(
        item as ModelInterface,
        storeItems,
        expanded
      )

      newStoreItems = { ...newStoreItems, ...newItems }
    })
  }

  return newStoreItems
}

const setAllItemsInLayerStore = (expanded: boolean) => {
  // We have to go through the model because only if ALL items
  // had been expanded previously would all keys in be in store

  const { model }: ModelStoreInterface = ModelStore.get()
  const items = getValuesByTraversing(model, {}, expanded)

  items[model.id!] = true

  LayerStore.set(() => items)
}

export default setAllItemsInLayerStore
