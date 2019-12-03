import ModelInterface from '../../types/ModelInterface'
import { uniqueId } from '../../utils/utilities'
import initModelItems from './initModelItems'

const initModel = (source: ModelInterface, parentId?: string) => {
  const model: ModelInterface = { ...source }

  if (!model.id) {
    model.id = uniqueId()
  }

  if (!model.name) {
    model.name = `${model.type}-${model.id}`
  }

  if (parentId) {
    model.parentId = parentId
  }

  if (model.items && model.items.length) {
    model.items = initModelItems(model.items)
  }

  return model
}

export default initModel
