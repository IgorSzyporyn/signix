import SettingsInterface from '../../types/SettingsInterface'

const initSettings = (source: SettingsInterface) => {
  const settings: SettingsInterface = { ...source }

  return settings
}

export default initSettings
