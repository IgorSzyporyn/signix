import ApiQueryStore from '../ApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const updateValidatingInApiQueryStore = (validating: boolean) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    validating
  }))
}

export default updateValidatingInApiQueryStore
