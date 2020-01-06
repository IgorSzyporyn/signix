import PropertyStoreInterface from '../../types/PropertyStoreInterface'

const propertyStoreDefaults: PropertyStoreInterface = {
  expanded: {
    dimension: false,
    color: false,
    backgroundImage: false,
    font: false,
    position: false,
    apiKey: false,
    options: false,
    textStatic: false,
    imageStatic: true,
    scale: true
  }
}

export default propertyStoreDefaults
