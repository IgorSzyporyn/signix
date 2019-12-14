import { Store as LacoStore } from 'laco'
import appStoreDefaults from './appStore/appStoreDefaults'
import appStoreInit from './appStore/appStoreInit'
import AppStoreInterface from '../types/AppStoreInterface'

export const initAppStore = (values: Partial<AppStoreInterface>) => {
  const initializedValues = appStoreInit(values)
  AppStore.set(() => initializedValues)
}

const AppStore = new LacoStore({ ...appStoreDefaults })

const clone: any = window
clone.D = AppStore

export default AppStore
