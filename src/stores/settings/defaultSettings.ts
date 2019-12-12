import SettingsInterface from '../../types/SettingsInterface'

const defaultSettings: SettingsInterface = {
  toolbox: {
    view: 'list',
    width: 240,
    minWidth: 240,
    maxWidth: 450
  },
  canvas: {
    backgroundColor: 'var(--color-dark)'
  },
  layers: {
    width: 350,
    maxWidth: 600,
    minWidth: 300
  },
  action: {
    active: 0
  }
}

export default defaultSettings
