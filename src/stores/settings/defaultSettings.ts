import { SettingsStoreInterface } from '../SettingsStore'

const defaultSettings: SettingsStoreInterface = {
  toolbox: {
    view: 'list',
    width: 240,
    minWidth: 240,
    maxWidth: 450
  },
  canvas: {
    background: '#1c2022',
    active: '#2a69dd',
    dropAccept: '#021580',
    dropReady: '#00ad2b',
    dropOver: '#00f93e'
  },
  layers: {
    width: 350,
    maxWidth: 600,
    minWidth: 300
  },
  utility: {
    active: 0
  },
  main: {
    active: 0
  },
  action: {
    active: 0
  },
  expanded: {
    canvas: true
  }
}

export default defaultSettings
