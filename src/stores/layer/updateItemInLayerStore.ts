import LayerStore from '../LayerStore'

const updateItemInLayerStore = (expanded: boolean, id?: string) => {
  if (id) {
    LayerStore.set(() => ({ [id]: expanded }))
  }
}

export default updateItemInLayerStore
