import ExplorerDimensionsInterface from './ExplorerDimensionsInterface'
import ExplorerTypeTypes from './ExplorerTypeTypes'

type ExplorerResponse = {
  name: string
  path: string
  type: ExplorerTypeTypes
  size: number
  extension: string
  dimensions: false | ExplorerDimensionsInterface
}

export default ExplorerResponse
