import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const GroupModel: ModelInterface = {
  ...CoreModel,
  type: 'group',
  dimension: {
    ...CoreModel.dimension,
    width: 250,
    height: 250
  },
  items: []
}

export default GroupModel
