import ModelInterface from '../types/ModelInterface'
import ImageModel from './ImageModel'

const ImageOptionsModel: ModelInterface = {
  ...ImageModel,
  type: 'imageoptions'
}

export default ImageOptionsModel
