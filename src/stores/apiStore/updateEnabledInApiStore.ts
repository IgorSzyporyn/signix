import ApiStore from '../ApiStore'
import ApiStoreInterface from '../../types/ApiStoreInterface'

const updateEnabledInApiStore = (enabled: boolean) => {
  ApiStore.set((state: ApiStoreInterface) => ({
    ...state,
    enabled
  }))
}

export default updateEnabledInApiStore
