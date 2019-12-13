import Models from '../models/Models'
import ModelInterfacePartial from '../types/ModelInterfacePartial'
import ModelTypes from '../types/ModelTypes'
import mergeModels from './mergeModels'
import { uniqueId } from './utilities'
import initModelItems from './initModelItems'
import sanitizeColorString from './sanitizeColorString'
import ModelInterface from '../types/ModelInterface'

const initModel = (
  partial: ModelInterfacePartial,
  type: ModelTypes,
  parentId?: string,
  parentLevel?: number
) => {
  const source = Models[type]
  const model = mergeModels(source, partial)

  model.color.background = sanitizeColorString(model.color.background)
  model.color.foreground = sanitizeColorString(model.color.foreground)

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
    model.items = initModelItems(model.items, model.id, model.level)
  }

  return model as ModelInterface
}

export default initModel
