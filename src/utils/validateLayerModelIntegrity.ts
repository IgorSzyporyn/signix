import ModelStore from '../stores/ModelStore'
import ModelStoreInterface from '../types/ModelStoreInterface'
import QueryDataStore from '../stores/QueryDataStore'
import QueryDataStoreInterface from '../types/QueryDataStoreInterface'
import ModelInterface from '../types/ModelInterface'
import QueryDataStoreModelInterface from '../types/QueryDataStoreModelInterface'
import QueryDataStoreDataInterface from '../types/QueryDataStoreDataInterface'

const appendErrorToResult = (
  result: ValidateLayerModelResultItem[] | true,
  error: ValidateLayerModelResultItem | ValidateLayerModelResultItem[]
) => {
  let processedError: ValidateLayerModelResultItem[] = []

  if (!Array.isArray(error)) {
    processedError = [error]
  } else {
    processedError = error
  }

  if (result !== true) {
    result = [...result, ...processedError]
  } else {
    result = processedError
  }

  return result
}

const validateLayerModel = (
  model: ModelInterface,
  apiData: QueryDataStoreDataInterface,
  apiModel: QueryDataStoreModelInterface
) => {
  let result: ValidateLayerModelResult = true

  // Check for name in example data
  if (model.api && model.value && !apiData[model.value]) {
    result = appendErrorToResult(result, {
      id: model.id!,
      error: `API Key "${model.value}" used in the layer "${model.name}" does not exist in result from data API`,
      errorLevel: 'major'
    })
  }

  // Check if all enumerations matches up
  if (model.enumeration.length > 0) {
    // Go through check for this API key in matching apiModel
    if (model.value && apiModel[model.value]) {
      const apiModelKeys = apiModel[model.value]

      // Make sure apiModel has a key for our enumeration
      model.enumeration.forEach(enumeration => {
        if (!apiModelKeys.includes(enumeration.key)) {
          const error: ValidateLayerModelResultItem = {
            id: model.id!,
            error: `Enumerations key for layer "${model.value}" has no match in model from API`,
            errorLevel: 'major'
          }

          result = appendErrorToResult(result, error)
        }
      })

      // Check if apiModel has a key we do not have in enumeration
      apiModelKeys.forEach(modelKey => {
        // Se if modelKey is use in enumeration
        const modelKeyUsedInEnumeration = model.enumeration.find(
          enumeration => {
            return enumeration.key === modelKey
          }
        )

        if (!modelKeyUsedInEnumeration) {
          const error: ValidateLayerModelResultItem = {
            id: model.id!,
            error: `The layer "${model.name}" missed enumeration for "${modelKey}"`,
            errorLevel: 'medium'
          }

          result = appendErrorToResult(result, error)
        }
      })
    } else {
      const error: ValidateLayerModelResultItem = {
        id: model.id!,
        error: `API key "${model.value}" has no matching enumeration model in layer "${model.name}"`,
        errorLevel: 'major'
      }

      result = appendErrorToResult(result, error)
    }
  }

  if (model.items.length > 0) {
    model.items.forEach(item => {
      const validateResult = validateLayerModel(
        item as ModelInterface,
        apiData,
        apiModel
      )

      if (validateResult !== true && validateResult.length > 0) {
        result = appendErrorToResult(result, validateResult)
      }
    })
  }

  return result
}

type ValidateLayerModelResultErrorLevel = 'minor' | 'medium' | 'major'

export type ValidateLayerModelResultItem = {
  id: string
  error: string
  errorLevel: ValidateLayerModelResultErrorLevel
}

export type ValidateLayerModelResult = ValidateLayerModelResultItem[] | true

type Callback = (valid: ValidateLayerModelResult) => void

const validateLayerModelIntegrity = (callback: Callback) => {
  const { model: rootModel }: ModelStoreInterface = ModelStore.get()
  const {
    data: apiData,
    model: apiModel
  }: QueryDataStoreInterface = QueryDataStore.get()
  const result = validateLayerModel(rootModel, apiData, apiModel)

  callback(result)
}

export default validateLayerModelIntegrity
