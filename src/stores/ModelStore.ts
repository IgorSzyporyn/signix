import { Store } from 'laco'
import ModelInterface from '../types/ModelInterface'
import defaultModel from './model/defaultModel'
import initModel from './model/initModel'

export type ModelStoreInterface = {
  model: ModelInterface
}

export const initModelStore = (model: ModelInterface) => {
  ModelStore.set(() => ({ model: { ...initModel(model) } }))
}

const initDefaultValues = (model: ModelInterface) => {
  const store: ModelStoreInterface = {
    model: initModel(model)
  }

  return store
}

const defaultStore = initDefaultValues(defaultModel)

const ModelStore = new Store(defaultStore)

export default ModelStore
