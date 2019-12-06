import ModelStore, { ModelStoreInterface } from '../ModelStore'

const updateActiveInModelStore = (id?: string) => {
  ModelStore.set((state: ModelStoreInterface) => ({ ...state, active: id }))
}

export default updateActiveInModelStore
