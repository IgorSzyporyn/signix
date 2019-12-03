import ModelInterface from '../../types/ModelInterface'
import ModelStore from '../ModelStore'
import findModelById from './findModelById'

const updateItemInModelStore = (item: ModelInterface) => {
  const store = ModelStore.get()
  let model = { ...store.model }

  const source = findModelById(model, item.id)

  if (!source) {
    console.warn('Could not find model with given id')
    return false
  }

  if (!source.parentId) {
    model = { ...source }

    return true
  }

  const parentSource = findModelById(model, item.parentId)

  if (!parentSource) {
    console.warn('Looking for parent model without an id')
    return false
  }

  if (parentSource.items) {
    parentSource.items.some((parentItem, index, root) => {
      if (parentItem.id === source.id) {
        root[index] = { ...item }
        return true
      } else {
        return false
      }
    })
  }

  ModelStore.set(() => ({ model }))

  return true
}

export default updateItemInModelStore
