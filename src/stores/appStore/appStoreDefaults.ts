import AppStoreInterface from '../../types/AppStoreInterface'

const appStoreDefaults: AppStoreInterface = {
  canvas: {
    background: '#1c2022',
    active: '#2a69dd',
    dropAccept: '#021580',
    dropReady: '#00ad2b',
    dropOver: '#00f93e'
  },
  expanded: {},
  activeModelId: undefined,
  editingModelId: undefined
}

export default appStoreDefaults
