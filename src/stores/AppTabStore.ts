import { Store as LacoStore } from 'laco'
import appTabStoreDefaults from './appTabStore/appTabStoreDefaults'
import appTabStoreInit from './appTabStore/appTabStoreInit'
import AppTabStoreInterface from '../types/AppTabStoreInterface'

export const initAppTabStore = (values: AppTabStoreInterface) => {
  const initializedValues = appTabStoreInit(values)
  AppTabStore.set(() => initializedValues)
}

const AppTabStore = new LacoStore({ ...appTabStoreDefaults })

const clone: any = window
clone.E = AppTabStore

export default AppTabStore
