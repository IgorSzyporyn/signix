import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const ImageModel: ModelInterface = {
  ...CoreModel,
  type: 'image',
  coreType: 'image',
  dimension: {
    ...CoreModel.dimension,
    disabled: true
  }
}

export default ImageModel
