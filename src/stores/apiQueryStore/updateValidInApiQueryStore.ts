import ApiQueryStore from '../ApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const updateValidInApiQueryStore = (valid: boolean) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    valid
  }))
}

export default updateValidInApiQueryStore
