import ModelInterface from '../../types/ModelInterface'
import ModelStore from '../ModelStore'
import findModelById from './findModelById'
import initModel from './initModel'

const addItemToModelStore = (source: ModelInterface, parentId: string) => {
  const store = ModelStore.get()
  const model = { ...store.model }
  const item = initModel(source, parentId)

  if (!parentId) {
    ModelStore.set(() => ({ model: item }))
  } else {
    const parentModel = findModelById(model, parentId)

    if (parentModel && parentModel.items) {
      parentModel.items.push(item)
    }

    ModelStore.set(() => ({ model }))
  }
}

export default addItemToModelStore
