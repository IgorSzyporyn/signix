import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'

const TextModel: ModelInterface = {
  ...CoreModel,
  type: 'text',
  color: {
    foreground: '#000',
    background: 'transparent'
  }
}

export default TextModel
