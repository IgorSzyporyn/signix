import QueryStore from '../QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'

const updateAllExpandedInQueryStore = (setExpanded: boolean) => {
  const { expanded } = QueryStore.get()

  Object.keys(expanded).forEach(key => {
    expanded[key] = setExpanded
  })

  QueryStore.set((state: QueryStoreInterface) => ({ ...state, expanded }))
}

export default updateAllExpandedInQueryStore
