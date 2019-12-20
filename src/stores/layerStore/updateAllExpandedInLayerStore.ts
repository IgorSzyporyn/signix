import LayerStoreExpandedInterface from '../../types/LayerStoreExpandedInterface'
import ModelInterface from '../../types/ModelInterface'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import LayerStore from '../LayerStore'
import ModelStore from '../ModelStore'
import LayerStoreInterface from '../../types/LayerStoreInterface'

const getValuesByTraversing = (
  model: ModelInterface,
  storeExpanded: LayerStoreExpandedInterface,
  expanded: boolean
) => {
  let newStoreExpanded: LayerStoreExpandedInterface = { ...storeExpanded }

  if (model.id) {
    newStoreExpanded[model.id] = expanded
  }

  if (model.items && model.items.length) {
    model.items.forEach(item => {
      const newItems = getValuesByTraversing(item as ModelInterface, storeExpanded, expanded)

      newStoreExpanded = { ...newStoreExpanded, ...newItems }
    })
  }

  return newStoreExpanded
}

const updateAllExpandedInLayerStore = (value: boolean) => {
  // We have to go through the model because only if ALL items
  // had been expanded previously would all keys in be in store

  const { model }: ModelStoreInterface = ModelStore.get()
  const expanded = getValuesByTraversing(model, {}, value)

  // Make sure the root model stays expanded
  expanded[model.id!] = true

  LayerStore.set((state: LayerStoreInterface) => ({ ...state, expanded }))
}

export default updateAllExpandedInLayerStore
