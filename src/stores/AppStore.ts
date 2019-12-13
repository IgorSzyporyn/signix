import { Store as LacoStore } from 'laco'
import appStoreDefaults from './appStore/appStoreDefaults'
import appStoreInit from './appStore/appStoreInit'
import AppStoreInterface from '../types/AppStoreInterface'

export const initAppStore = (values: AppStoreInterface) => {
  AppStore.set(() => ({ ...appStoreInit(values) }))
}

const initDefaultValues = (values: AppStoreInterface) => {
  const store: AppStoreInterface = appStoreInit(values)

  return store
}

const defaultStoreValues = initDefaultValues(appStoreDefaults)

const AppStore = new LacoStore(defaultStoreValues)

export default AppStore
