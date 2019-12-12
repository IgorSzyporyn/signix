import ModelInterface from '../types/ModelInterface'
import TextModel from './TextModel'

const TextOptionsModel: ModelInterface = {
  ...TextModel,
  type: 'textoptions'
}

export default TextOptionsModel
