import GroupedLayerErrorsInterface from '../types/GroupedLayerErrorsInterface'
import { ValidateLayerModelResultItem } from './validateLayerModelIntegrity'

const groupLayerErrorsById = (errors: ValidateLayerModelResultItem[]) => {
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
