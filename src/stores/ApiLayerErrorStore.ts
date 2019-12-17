import { Store } from 'laco'
import ApiLayerErrorStoreInterface from '../types/ApiLayerErrorStoreInterface'
import apiLayerErrorStoreDefaults from './apiLayerErrorStore/apiLayerErrorStoreDefaults'
import apiLayerErrorStoreInit from './apiLayerErrorStore/apiLayerErrorStoreInit'

export const initApiLayerErrorStore = (values: ApiLayerErrorStoreInterface) => {
  const initializedValues = apiLayerErrorStoreInit(values)
  ApiLayerErrorStore.set(() => initializedValues)
}

const ApiLayerErrorStore = new Store({ ...apiLayerErrorStoreDefaults })

const clone: any = window
clone.D = ApiLayerErrorStore

export default ApiLayerErrorStore
