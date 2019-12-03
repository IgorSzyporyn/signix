import BackgroundModel from '../../models/BackgroundModel'
import ModelInterface from '../../types/ModelInterface'

const defaultModel: ModelInterface = {
  ...BackgroundModel,
  id: 'BackgroundRoot',
  name: 'Background'
}

export default defaultModel
