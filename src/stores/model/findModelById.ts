import ModelInterface from '../../types/ModelInterface'
import ModelStore from '../ModelStore'

const searchItemsForModelById = (id: string, items: ModelInterface[]) => {
  let found: ModelInterface | null = null

  items.some(item => {
    if (item.id === id) {
      found = item
    }

    if (found === null && item.items) {
      found = searchItemsForModelById(id, item.items)
    }

    return found !== null
  })

  return found
}

const findModelById = (id: string) => {
  const { model } = ModelStore.get()
  let found: ModelInterface | null = null

  if (model.id === id) {
    found = model
  } else if (model.items) {
    found = searchItemsForModelById(id, model.items)
  }

  return found
}

export default findModelById
