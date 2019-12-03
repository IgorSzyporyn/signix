import ModelInterface from '../types/ModelInterface'

const CoreModel: ModelInterface = {
  type: 'core',
  position: {
    type: 'top-left',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  dimension: {
    disabled: false,
    width: 0,
    height: 0
  },
  color: {
    background: 'transparent',
    foreground: 'transparent'
  },
  rotation: 0
}

export default CoreModel
