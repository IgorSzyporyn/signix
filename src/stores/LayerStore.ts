import { Store } from 'laco'

export type LayerStoreInterface = {
  [key: string]: boolean
}

const defaultStore: LayerStoreInterface = {}

const LayerStore = new Store(defaultStore)

export default LayerStore
