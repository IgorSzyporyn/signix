import AppStoreInterface from '../../types/AppStoreInterface'

const appStoreDefaults: AppStoreInterface = {
  toolbox: {
    view: 'list'
  },
  canvas: {
    background: '#1c2022',
    active: '#2a69dd',
    dropAccept: '#021580',
    dropReady: '#00ad2b',
    dropOver: '#00f93e'
  },
  utilityArea: {
    activeTab: 0
  },
  mainArea: {
    activeTab: 0
  },
  actionArea: {
    activeTab: 0
  },
  expanded: {},
  activeModelId: undefined,
  editingModelId: undefined
}

export default appStoreDefaults
