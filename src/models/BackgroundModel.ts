import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const BackgroundModel: ModelInterface = {
  ...CoreModel,
  type: 'background',
  dimension: {
    ...CoreModel.dimension,
    width: 640,
    height: 130
  }
}

export default BackgroundModel
