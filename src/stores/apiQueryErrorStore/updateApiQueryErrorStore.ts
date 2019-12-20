import ApiQueryErrorStoreInterface from '../../types/ApiQueryErrorStoreInterface'
import ApiQueryErrorStore from '../ApiQueryErrorStore'

const updateApiQueryErrorStore = (
  source: Partial<ApiQueryErrorStoreInterface>
) => {
  ApiQueryErrorStore.set((state: ApiQueryErrorStoreInterface) => ({
    ...state,
    ...source
  }))
}

export default updateApiQueryErrorStore
