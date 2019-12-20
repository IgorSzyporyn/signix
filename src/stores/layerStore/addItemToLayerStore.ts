import LayerStore from '../LayerStore'

const addItemToLayerStore = (expanded: boolean, id: string) => {
  LayerStore.set(() => ({ [id]: expanded }))
}

export default addItemToLayerStore
