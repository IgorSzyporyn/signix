import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageOptionsMultipleQueryModel: ModelInterface = {
  ...ImageModel,
  type: 'imageoptionsmultiplequery',
  options: []
}

export default ImageOptionsMultipleQueryModel
