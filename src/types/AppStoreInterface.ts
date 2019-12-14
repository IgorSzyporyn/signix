import AppStoreCanvasInterface from './AppStoreCanvasInterface'
import ExpandedInterface from './ExpandedInterface'

type AppStoreInterface = {
  canvas: AppStoreCanvasInterface
  expanded: ExpandedInterface
  activeModelId: string | undefined
  editingModelId: string | undefined
}

export default AppStoreInterface
