import deleteItemInModelStore from '../stores/model/deleteItemInModelStore'
import { searchModelById } from '../stores/model/getModelById'
import deleteErrorInApiLayerErrorStore from '../stores/apiLayerErrorStore/deleteErrorInApiLayerErrorStore'
import ModelInterface from '../types/ModelInterface'

const deleteChildErrorsInApiLayerErrorStore = (items: ModelInterface[]) => {
  items.forEach(item => {
    if (item.api) {
      deleteErrorInApiLayerErrorStore(item.id!)
    }

    if (item.items.length > 0) {
      deleteChildErrorsInApiLayerErrorStore(item.items as ModelInterface[])
    }
  })
}

const deleteModel = (id: string) => {
  const model = searchModelById(id)

  if (model && model.items.length > 0) {
    deleteChildErrorsInApiLayerErrorStore(model.items as ModelInterface[])
  }

  deleteErrorInApiLayerErrorStore(id)
  deleteItemInModelStore(id)
}

export default deleteModel
