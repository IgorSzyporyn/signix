import AppStoreCanvasInterface from './AppStoreCanvasInterface'
import AppStoreExpandedInterface from './AppStoreExpandedInterface'

type AppStoreInterface = {
  canvas: AppStoreCanvasInterface
  expanded: AppStoreExpandedInterface
  activeModelId: string | undefined
  editingModelId: string | undefined
}

export default AppStoreInterface
