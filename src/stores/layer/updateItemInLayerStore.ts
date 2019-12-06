import LayerStore from '../LayerStore'

const updateItemInLayerStore = (expanded: boolean, id: string) => {
  LayerStore.set(() => ({ [id]: expanded }))
}

export default updateItemInLayerStore
