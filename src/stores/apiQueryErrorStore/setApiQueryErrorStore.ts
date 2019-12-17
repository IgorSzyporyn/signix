import ApiQueryErrorStoreInterface from '../../types/ApiQueryErrorStoreInterface'
import ApiQueryErrorStore from '../ApiQueryErrorStore'

const setApiQueryErrorStore = (source: ApiQueryErrorStoreInterface) => {
  ApiQueryErrorStore.set(() => source)
}

export default setApiQueryErrorStore
