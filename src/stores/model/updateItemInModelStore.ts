import ModelInterface from '../../types/ModelInterface'
import ModelStore from '../ModelStore'
import findModelById from './findModelById'
import merge from 'deepmerge'

const validateItem = (item: ModelInterface) => {
  if (!item.id) {
    return false
  }

  if (!findModelById(item.id)) {
    return false
  }

  return true
}

const updateItemInModelStore = (updateItem: ModelInterface) => {
  const valid = validateItem(updateItem)

  if (!valid) {
    return false
  }

  const store = ModelStore.get()
  const sourceItem = { ...updateItem }
  const modelItem = { ...findModelById(sourceItem.id!)! }

  const sourceItems = [...(sourceItem.items || [])]

  delete sourceItem.items
  delete modelItem.items

  const item = merge(modelItem, sourceItem)
  item.items = sourceItems

  let root = store.model

  if (!item.parentId) {
    root = item
  } else {
  }

  ModelStore.set(() => ({ model: root }))

  return true
}

export default updateItemInModelStore
