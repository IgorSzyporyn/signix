import ModelInterfacePartial from '../types/ModelInterfacePartial'
import initModel from './initModel'

const initModelItems = (items: ModelInterfacePartial[], parentId: string, parentLevel: number) => {
  return items.map(item => {
    return initModel(item, item.type, parentId, parentLevel)
  })
}

export default initModelItems
