import ModelStore from '../ModelStore'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import ModelInterface from '../../types/ModelInterface'

const checkForApiItemsRecursivly = (model: ModelInterface) => {
  let apiEnabled = false

  if (model.api) {
    apiEnabled = true
  } else if (model.items.length > 0) {
    model.items.some(item => {
      const itemHasApi = checkForApiItemsRecursivly(item as ModelInterface)

      if (itemHasApi) {
        apiEnabled = true
      }

      return itemHasApi
    })
  }

  return apiEnabled
}

const checkForApiItemsInModelStore = () => {
  const { model }: ModelStoreInterface = ModelStore.get()
  let hasApiItem = checkForApiItemsRecursivly(model)

  return hasApiItem
}

export default checkForApiItemsInModelStore
