import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageOptionsMultipleModel: ModelInterface = {
  ...ImageModel,
  type: 'imageoptionsmultiple',
  options: []
}

export default ImageOptionsMultipleModel
