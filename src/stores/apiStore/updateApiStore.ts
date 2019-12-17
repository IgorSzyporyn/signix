import ApiStoreInterface from '../../types/ApiStoreInterface'
import ApiStore from '../ApiStore'

const updateApiStore = (partial: Partial<ApiStoreInterface>) => {
  ApiStore.set((state: ApiStoreInterface) => ({
    ...state,
    ...partial
  }))
}

export default updateApiStore
