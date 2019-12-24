import ExplorerDimensionsInterface from './ExplorerDimensionsInterface'

type ExplorerInterface = {
  name: string
  path: string
  type: string
  size: number
  extension: string
  dimensions: ExplorerDimensionsInterface
}

export default ExplorerInterface
