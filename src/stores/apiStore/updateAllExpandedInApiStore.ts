import ApiStore from '../ApiStore'
import ApiStoreInterface from '../../types/ApiStoreInterface'

const updateAllExpandedInApiStore = (setExpanded: boolean) => {
  const { expanded } = ApiStore.get()

  Object.keys(expanded).forEach(key => {
    expanded[key] = setExpanded
  })

  ApiStore.set((state: ApiStoreInterface) => ({ ...state, expanded }))
}

export default updateAllExpandedInApiStore
