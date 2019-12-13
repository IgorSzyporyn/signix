import { Store as LacoStore } from 'laco'
import appStoreDefaults from './appStore/appStoreDefaults'
import appStoreInit from './appStore/appStoreInit'
import AppStoreInterface from '../types/AppStoreInterface'

export const initAppStore = (values: AppStoreInterface) => {
  const initializedValues = appStoreInit(values)
  AppStore.set(() => initializedValues)
}

const AppStore = new LacoStore({ ...appStoreDefaults })

export default AppStore
