import LayerStore from '../LayerStore'
import LayerStoreInterface from '../../types/LayerStoreInterface'

const updateExpandedInLayerStore = (expanded: boolean, id?: string) => {
  if (id) {
    LayerStore.set((state: LayerStoreInterface) => ({
      ...state,
      expanded: {
        ...state.expanded,
        [id]: expanded
      }
    }))
  }
}

export default updateExpandedInLayerStore
