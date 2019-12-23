import ModelInterface from '../types/ModelInterface'
import TextModel from './TextModel'

const TextStaticQueryModel: ModelInterface = {
  ...TextModel,
  type: 'textstaticquery',
  api: true
}

export default TextStaticQueryModel
