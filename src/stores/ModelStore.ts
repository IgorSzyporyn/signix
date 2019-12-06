import { Store } from 'laco'
import ModelInterface from '../types/ModelInterface'
import initModel from '../utils/initModel'

export type ModelStoreInterface = {
  model: ModelInterface
  active?: string
}

const ModelStore = new Store({
  model: initModel({ type: 'background', name: 'Background' }, 'background'),
  active: undefined
})

const clone: any = window
clone.A = ModelStore

export default ModelStore
