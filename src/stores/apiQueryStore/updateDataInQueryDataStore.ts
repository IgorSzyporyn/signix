import ApiQueryStore from '../ApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const updateDataInApiQueryStore = (data: object) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    data
  }))
}

export default updateDataInApiQueryStore
