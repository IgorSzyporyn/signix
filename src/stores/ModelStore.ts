import { Store } from 'laco'
import initModel from '../utils/initModel'

const ModelStore = new Store({
  model: initModel({ type: 'background', name: 'Background' }, 'background')
})

const clone: any = window
clone.A = ModelStore

export default ModelStore
