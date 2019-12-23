import ApiErrorInterface from '../types/ApiErrorInterface'

const apiLayerErrorsContainsBadApiKey = (errors: ApiErrorInterface[]) => {
  let containsBadApiKey = false

  errors.some(error => {
    containsBadApiKey =
      error.errorType === 'apiKeyNotInData' || error.errorType === 'apiKeyNotInModel'

    return containsBadApiKey
  })

  return containsBadApiKey
}

export default apiLayerErrorsContainsBadApiKey
