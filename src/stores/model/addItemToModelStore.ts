import ModelInterfacePartial from '../../types/ModelInterfacePartial'
import initModel from '../../utils/initModel'
import ModelStore, { ModelStoreInterface } from '../ModelStore'
import getModelById from './getModelById'

const addItemToModelStore = (
  source: ModelInterfacePartial,
  parentId: string
) => {
  const store = ModelStore.get()
  let root = { ...store.model }

  if (!parentId) {
    // No parentId means we set a new root
    root = initModel(source, source.type)
  } else {
    // We are adding an item to another item
    const parent = getModelById(parentId)

    if (parent) {
      const itemToAdd = initModel(source, source.type, parentId, parent.level)
      parent.items.push(itemToAdd)
    }
  }

  ModelStore.set((state: ModelStoreInterface) => ({ ...state, model: root }))
}

export default addItemToModelStore
