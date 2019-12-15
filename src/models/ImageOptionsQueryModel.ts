import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageOptionsQueryModel: ModelInterface = {
  ...ImageModel,
  type: 'imageoptionsquery',
  options: []
}

export default ImageOptionsQueryModel
