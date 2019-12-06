import ModelInterfacePartial from '../../types/ModelInterfacePartial'
import ModelTypes from '../../types/ModelTypes'
import initModel from '../../utils/initModel'
import ModelStore, { ModelStoreInterface } from '../ModelStore'

const initModelStore = (model: ModelInterfacePartial, type: ModelTypes) => {
  ModelStore.set((state: ModelStoreInterface) => ({
    active: undefined,
    model: initModel(model, type)
  }))
}

export default initModelStore
