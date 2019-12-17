import { Store } from 'laco'
import ApiStoreInterface from '../types/ApiStoreInterface'
import apiStoreDefaults from './apiStore/apiStoreDefaults'
import apiStoreInit from './apiStore/apiStoreInit'

export const initApiStore = (values: Partial<ApiStoreInterface>) => {
  const initializedValues = apiStoreInit(values)
  ApiStore.set(() => initializedValues)
}

const ApiStore = new Store({ ...apiStoreDefaults })

export default ApiStore
