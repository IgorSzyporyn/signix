import AppStoreActionAreaInterface from './AppStoreActionAreaInterface'
import AppStoreCanvasInterface from './AppStoreCanvasInterface'
import AppStoreExpandedInterface from './AppStoreExpandedInterface'
import AppStoreMainAreaInterface from './AppStoreMainAreaInterface'
import AppStoreToolboxInterface from './AppStoreToolboxInterface'
import AppStoreUtilityAreaInterface from './AppStoreUtilityAreaInterface'

type AppStoreInterface = {
  actionArea: AppStoreActionAreaInterface
  mainArea: AppStoreMainAreaInterface
  utilityArea: AppStoreUtilityAreaInterface
  canvas: AppStoreCanvasInterface
  toolbox: AppStoreToolboxInterface
  expanded: AppStoreExpandedInterface
  activeModelId: string | undefined
  editingModelId: string | undefined
}

export default AppStoreInterface
