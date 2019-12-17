import ApiEnumerationKeyTypes from './ApiEnumerationKeyTypes'
import ApiErrorTypes from './ApiErrorTypes'
import ApiErrorLevelTypes from './ApiErrorLevelTypes'

type ApiErrorInterface = {
  id: string
  enumKey?: ApiEnumerationKeyTypes
  errorType?: ApiErrorTypes
  text: string
  errorLevel: ApiErrorLevelTypes
  name: string
}

export default ApiErrorInterface
