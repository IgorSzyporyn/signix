import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageStaticModel: ModelInterface = {
  ...ImageModel,
  type: 'imagestatic'
}

export default ImageStaticModel
