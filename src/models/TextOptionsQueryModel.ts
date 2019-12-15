import ModelInterface from '../types/ModelInterface'
import TextModel from './TextModel'

const TextOptionsQueryModel: ModelInterface = {
  ...TextModel,
  type: 'textoptionsquery'
}

export default TextOptionsQueryModel
