import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const ImageModel: ModelInterface = {
  ...CoreModel,
  type: 'image',
  dimension: {
    ...CoreModel.dimension,
    width: 48,
    height: 48
  }
}

export default ImageModel
