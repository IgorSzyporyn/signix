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
    background: 'rgba(0, 0, 0, 0)',
    foreground: 'rgba(0, 0, 0, 0)'
  },
  font: {
    size: 24,
    type: 'Arial'
  },
  items: [],
  background: {
    disabled: true,
    image: '',
    position: 'center'
  },
  options: [],
  group: false,
  hidden: false,
  unique: false,
  value: ''
}

export default CoreModel
