import ModelInterface from './ModelInterface'

type ModelInterfacePartial = PartialWithRequired<ModelInterface, 'type'>

export default ModelInterfacePartial
