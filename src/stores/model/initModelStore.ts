import ModelInterfacePartial from '../../types/ModelInterfacePartial'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import ModelTypes from '../../types/ModelTypes'
import initModel from '../../utils/initModel'
import ModelStore from '../ModelStore'

const initModelStore = (model: ModelInterfacePartial, type: ModelTypes) => {
  ModelStore.set((state: ModelStoreInterface) => ({
    ...state,
    model: initModel(model, type)
  }))
}

export default initModelStore
