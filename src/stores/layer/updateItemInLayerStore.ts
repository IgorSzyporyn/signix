import LayerStore from '../LayerStore'

const updateItemInLayerStore = (expanded: boolean, id: string) => {
  LayerStore.set(() => ({ [id]: expanded }))
  const store = LayerStore.get()
  console.log(store)
}

export default updateItemInLayerStore
