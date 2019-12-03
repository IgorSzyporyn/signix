import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageDynamicModel: ModelInterface = {
  ...ImageModel,
  type: 'imagedynamic'
}

export default ImageDynamicModel
