import merge from 'deepmerge'
import ModelInterfacePartial from '../types/ModelInterfacePartial'

const mergeModels = (
  first: ModelInterfacePartial,
  second: ModelInterfacePartial
) => {
  const firstHasItems = first.items && first.items.length
  const secondHasItems = second.items && second.items.length

  if (firstHasItems && secondHasItems) {
    first.items = []
  }

  return merge(first, second)
}

export default mergeModels
