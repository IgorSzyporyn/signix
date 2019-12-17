import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiQueryStore from '../ApiQueryStore'

const updateApiQueryStore = (partial: Partial<ApiQueryStoreInterface>) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    ...partial
  }))
}

export default updateApiQueryStore
