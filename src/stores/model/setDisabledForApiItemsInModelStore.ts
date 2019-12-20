import ModelStore from '../ModelStore'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import ModelInterface from '../../types/ModelInterface'

const setDisabledForModels = (source: ModelInterface[], disabled: boolean) => {
  const models: ModelInterface[] = []

  source.forEach(model => {
    models.push(setDisabledForModel(model, disabled))
  })

  return models
}

const setDisabledForModel = (source: ModelInterface, disabled: boolean) => {
  const model: ModelInterface = { ...source }

  if (model.api) {
    model.disabled = disabled
  }

  model.items = setDisabledForModels(model.items as ModelInterface[], disabled)

  return model
}

const setDisabledForApiItemsInModelStore = (disabled: boolean) => {
  const { model: rootModel }: ModelStoreInterface = ModelStore.get()

  const model = setDisabledForModel(rootModel, disabled)

  ModelStore.set((state: ModelStoreInterface) => ({ ...state, model }))
}

export default setDisabledForApiItemsInModelStore
