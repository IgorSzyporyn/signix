import ModelInterface from '../types/ModelInterface'
import TextModel from './TextModel'

const TextDynamicModel: ModelInterface = {
  ...TextModel,
  type: 'textdynamic'
}

export default TextDynamicModel
