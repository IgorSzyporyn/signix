import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const ImageModel: ModelInterface = {
  ...CoreModel,
  type: 'image',
  coreType: 'image'
}

export default ImageModel
