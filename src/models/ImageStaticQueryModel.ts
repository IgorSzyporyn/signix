import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageStaticQueryModel: ModelInterface = {
  ...ImageModel,
  type: 'imagestaticquery'
}

export default ImageStaticQueryModel
