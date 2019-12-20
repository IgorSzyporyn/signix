import ApiErrorInterface from './ApiErrorInterface'
import ApiQueryErrorTypes from './ApiQueryErrorTypes'

type ApiQueryErrorStoreInterface = {
  [name in ApiQueryErrorTypes]: ApiErrorInterface[]
}

export default ApiQueryErrorStoreInterface
