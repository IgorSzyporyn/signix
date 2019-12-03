import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const GroupModel: ModelInterface = {
  ...CoreModel,
  type: 'group',
  dimension: {
    ...CoreModel.dimension,
    width: 50,
    height: 50
  },
  items: []
}

export default GroupModel
