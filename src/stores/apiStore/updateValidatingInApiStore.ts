import ApiStore from '../ApiStore'
import ApiStoreInterface from '../../types/ApiStoreInterface'

const updateValidatingInApiStore = (validating: boolean) => {
  ApiStore.set((state: ApiStoreInterface) => ({ ...state, validating }))
}

export default updateValidatingInApiStore
