import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageStaticQueryModel: ModelInterface = {
  ...ImageModel,
  type: 'imagestaticquery',
  api: true
}

export default ImageStaticQueryModel
