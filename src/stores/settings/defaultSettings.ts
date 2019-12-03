import SettingsInterface from '../../types/SettingsInterface'

const defaultSettings: SettingsInterface = {
  toolbox: {
    view: 'list',
    width: 250,
    minWidth: 250,
    maxWidth: 450
  },
  canvas: {
    backgroundColor: '#ccc'
  },
  layers: {
    width: 350,
    maxWidth: 600,
    minWidth: 300
  }
}

export default defaultSettings
