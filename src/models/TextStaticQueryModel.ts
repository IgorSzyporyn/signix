import ModelInterface from '../types/ModelInterface'
import TextModel from './TextModel'

const TextStaticQueryModel: ModelInterface = {
  ...TextModel,
  type: 'textstaticquery',
  value: 'User Input Text'
}

export default TextStaticQueryModel
