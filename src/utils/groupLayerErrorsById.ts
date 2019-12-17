import ApiErrorInterface from '../types/ApiErrorInterface'
import GroupedLayerErrorsInterface from '../types/GroupedLayerErrorsInterface'

const groupLayerErrorsById = (errors: ApiErrorInterface[]) => {
  const groupedErrors: GroupedLayerErrorsInterface = {}

  errors.forEach(error => {
    if (!groupedErrors[error.id]) {
      groupedErrors[error.id] = []
    }

    groupedErrors[error.id].push(error)
  })

  return groupedErrors
}

export default groupLayerErrorsById
