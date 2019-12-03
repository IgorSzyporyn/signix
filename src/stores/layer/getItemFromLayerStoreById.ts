import LayerStore, { LayerStoreInterface } from '../LayerStore'

const getItemFromLayerStoreById = (id: string) => {
  const store: LayerStoreInterface = LayerStore.get()

  return store[id]
}

export default getItemFromLayerStoreById
