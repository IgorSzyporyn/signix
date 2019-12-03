import { Store } from 'laco'

export type LayerStoreInterface = {
  [key: string]: boolean
}

const defaultStore: LayerStoreInterface = {}

const LayerStore = new Store(defaultStore)

const clone: any = window
clone.B = LayerStore

export default LayerStore
