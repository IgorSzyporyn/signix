import Models from '../models/Models'
import ModelInterfacePartial from '../types/ModelInterfacePartial'
import ModelTypes from '../types/ModelTypes'
import mergeModels from './mergeModels'
import { uniqueId } from './utilities'

const initModel = (
  partial: ModelInterfacePartial,
  type: ModelTypes,
  parentId?: string,
  parentLevel?: number
) => {
  const source = Models[type]
  const model = mergeModels(source, partial)

  if (!model.id) {
    model.id = uniqueId()
  }

  if (!model.name) {
    model.name = `${model.type}-${model.id}`
  }

  if (!model.items && model.group) {
    model.items = []
  }

  if (parentId) {
    model.parentId = parentId

    if (parentLevel !== undefined) {
      model.level = parentLevel + 1
    }
  } else {
    model.level = 0
  }

  if (model.items && model.items.length) {
    model.items = model.items.map(item =>
      initModel(item, item.type, model.id, model.level)
    )
  }

  return model
}

export default initModel
