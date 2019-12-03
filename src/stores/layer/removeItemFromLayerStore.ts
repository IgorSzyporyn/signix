import LayerStore from '../LayerStore'

const removeItemFromLayerStore = (id: string) => {
  const store = LayerStore.get()
  const clone = { ...store }

  delete clone[id]

  LayerStore.set(() => clone)
}

export default removeItemFromLayerStore
