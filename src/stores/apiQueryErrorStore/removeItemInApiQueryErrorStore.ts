import ApiQueryErrorStore from '../ApiQueryErrorStore'
import ApiQueryErrorStoreInterface from '../../types/ApiQueryErrorStoreInterface'

const removeItemInApiQueryErrorStore = (id: string) => {
  const store: ApiQueryErrorStoreInterface = ApiQueryErrorStore.get()
  const clone = { ...store }

  if (clone[id]) {
    delete clone[id]

    ApiQueryErrorStore.set(() => clone)
  }
}

export default removeItemInApiQueryErrorStore
