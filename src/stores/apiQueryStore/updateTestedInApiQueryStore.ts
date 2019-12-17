import ApiQueryStore from '../ApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const updateTestedInApiQueryStore = (tested: boolean) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    tested
  }))
}

export default updateTestedInApiQueryStore
