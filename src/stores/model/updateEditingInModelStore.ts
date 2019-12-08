import ModelStore, { ModelStoreInterface } from '../ModelStore'

const updateEditingInModelStore = (id?: string) => {
  ModelStore.set((state: ModelStoreInterface) => ({ ...state, editing: id }))
}

export default updateEditingInModelStore
