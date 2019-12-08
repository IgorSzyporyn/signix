import ModelInterface from '../../types/ModelInterface'
import ModelStore from '../ModelStore'
import ModelInterfacePartial from '../../types/ModelInterfacePartial'

export const searchItemsForModelById = (
  id: string,
  items: ModelInterfacePartial[]
) => {
  let found: ModelInterfacePartial | null = null

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

const getModelById = (id: string, model: ModelInterface) => {
  let found: ModelInterface | null = null

  if (model.id === id) {
    found = model
  } else if (model.items) {
    found = searchItemsForModelById(id, model.items)
  }

  return found
}

export const searchModelById = (id: string) => {
  const { model } = ModelStore.get()
  const found = getModelById(id, model)

  return found
}

export default getModelById
