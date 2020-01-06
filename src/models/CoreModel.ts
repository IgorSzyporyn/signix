import ModelInterface from '../types/ModelInterface'

const CoreModel: ModelInterface = {
  type: 'core',
  coreType: 'core',
  position: {
    type: 'top-left',
    x: 0,
    y: 0
  },
  dimension: {
    disabled: true,
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
  enumeration: [],
  background: {
    disabled: true,
    image: '',
    position: 'center'
  },
  options: [],
  value: '',
  scale: 1
}

export default CoreModel
