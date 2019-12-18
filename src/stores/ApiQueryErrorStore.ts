import { Store } from 'laco'
import ApiQueryErrorStoreInterface from '../types/ApiQueryErrorStoreInterface'
import apiQueryErrorStoreDefaults from './apiQueryErrorStore/apiQueryErrorStoreDefaults'
import apiQueryErrorStoreInit from './apiQueryErrorStore/apiQueryErrorStoreInit'

export const initApiQueryErrorStore = (values: ApiQueryErrorStoreInterface) => {
  const initializedValues = apiQueryErrorStoreInit(values)
  ApiQueryErrorStore.set(() => initializedValues)
}

const ApiQueryErrorStore = new Store({ ...apiQueryErrorStoreDefaults })

const clone: any = window
clone.C = ApiQueryErrorStore

export default ApiQueryErrorStore
