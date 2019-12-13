import AppStoreActionAreaInterface from './AppStoreActionAreaInterface'
import AppStoreCanvasInterface from './AppStoreCanvasInterface'
import AppStoreExpandedInterface from './AppStoreExpandedInterface'
import AppStoreMainAreaInterface from './AppStoreMainAreaInterface'
import AppStoreUtilityAreaInterface from './AppStoreUtilityAreaInterface'

type AppStoreInterface = {
  actionArea: AppStoreActionAreaInterface
  mainArea: AppStoreMainAreaInterface
  utilityArea: AppStoreUtilityAreaInterface
  canvas: AppStoreCanvasInterface
  expanded: AppStoreExpandedInterface
  activeModelId: string | undefined
  editingModelId: string | undefined
}

export default AppStoreInterface
