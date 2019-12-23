import PropertyStoreInterface from '../../types/PropertyStoreInterface'

const propertyStoreDefaults: PropertyStoreInterface = {
  expanded: {
    dimension: true,
    color: true,
    backgroundImage: true,
    font: true,
    position: true,
    apiKey: true,
    options: true,
    textStatic: true,
    imageStatic: true
  }
}

export default propertyStoreDefaults
