import { Store } from 'laco'
import ApiQueryStoreInterface from '../types/ApiQueryStoreInterface'
import apiQueryStoreDefaults from './apiQueryStore/apiQueryStoreDefaults'
import apiQueryStoreInit from './apiQueryStore/apiQueryStoreInit'

export const initApiQueryStore = (values: Partial<ApiQueryStoreInterface>) => {
  const initializedValues = apiQueryStoreInit(values)
  ApiQueryStore.set(() => initializedValues)
}

const ApiQueryStore = new Store({ ...apiQueryStoreDefaults })

const clone: any = window
clone.B = ApiQueryStore

export default ApiQueryStore
