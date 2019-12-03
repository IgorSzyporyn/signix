import { Store as LacoStore } from 'laco'
import SettingsInterface from '../types/SettingsInterface'
import defaultSettings from './settings/defaultSettings'
import initSettings from './settings/initSettings'

export type SettingsStoreInterface = SettingsInterface

export const initSettingsStore = (settings: SettingsInterface) => {
  SettingsStore.set(() => ({ settings: { ...initSettings(settings) } }))
}

const initDefaultValues = (settings: SettingsInterface) => {
  const store: SettingsStoreInterface = initSettings(settings)

  return store
}

const defaultStore = initDefaultValues(defaultSettings)

const SettingsStore = new LacoStore(defaultStore)

export default SettingsStore
