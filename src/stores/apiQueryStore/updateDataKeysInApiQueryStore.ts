import ApiQueryStore from '../ApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'

const updateDataKeysInApiQueryStore = (dataKeys: string[]) => {
  ApiQueryStore.set((state: ApiQueryStoreInterface) => ({
    ...state,
    dataKeys
  }))
}

export default updateDataKeysInApiQueryStore
