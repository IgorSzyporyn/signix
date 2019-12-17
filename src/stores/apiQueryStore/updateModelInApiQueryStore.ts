import ApiQueryStore from '../ApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const updateModelInApiQueryStore = (model: object) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    model
  }))
}

export default updateModelInApiQueryStore
