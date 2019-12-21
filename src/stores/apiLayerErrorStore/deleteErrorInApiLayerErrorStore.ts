import ApiLayerErrorStore from '../ApiLayerErrorStore'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import { isEmpty } from 'lodash'

const deleteErrorInApiLayerErrorStore = (id: string) => {
  if (!id) {
    return false
  }

  const { errors: sourceErrors }: ApiLayerErrorStoreInterface = ApiLayerErrorStore.get()
  const errors = { ...sourceErrors }

  delete errors[id]

  const emptyErrors = isEmpty(errors)

  ApiLayerErrorStore.set((state: ApiLayerErrorStoreInterface) => ({
    ...state,
    valid: emptyErrors ? true : state.valid,
    tested: emptyErrors ? true : state.tested,
    fixed: emptyErrors ? true : state.fixed,
    attemptedFixed: emptyErrors ? false : state.attempedFixed,
    errors
  }))

  return true
}

export default deleteErrorInApiLayerErrorStore
