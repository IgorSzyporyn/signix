import ModelInterface from '../../types/ModelInterface'
import initModel from './initModel'

const initModelItems = (modelItems: ModelInterface[]) => {
  const items = [...modelItems]

  items.forEach((item, index) => {
    items[index] = initModel(item)
  })

  return items
}

export default initModelItems
