import merge from 'deepmerge'
import ModelInterfacePartial from '../types/ModelInterfacePartial'

const mergeModels = (first: ModelInterfacePartial, second: ModelInterfacePartial) => {
  const firstHasItems = first.items && first.items.length
  const secondHasItems = second.items && second.items.length

  if (firstHasItems && secondHasItems) {
    first.items = []
  }

  const firstHasEnumeration = first.enumeration && first.enumeration.length
  const secondHasEnumeration = second.enumeration && second.enumeration.length

  if (firstHasEnumeration && secondHasEnumeration) {
    first.enumeration = []
  }

  if (firstHasEnumeration && !secondHasEnumeration) {
    first.enumeration = []
  }

  const firstHasOptions = first.options && first.options.length
  const secondHasOptions = second.options && second.options.length

  if (firstHasOptions && secondHasOptions) {
    first.options = []
  }

  if (firstHasOptions && !secondHasOptions) {
    first.options = []
  }

  return merge(first, second)
}

export default mergeModels
