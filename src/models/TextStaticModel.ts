import ModelInterface from '../types/ModelInterface'
import TextModel from './TextModel'

const TextStaticModel: ModelInterface = {
  ...TextModel,
  type: 'textstatic'
}

export default TextStaticModel
