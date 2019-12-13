import ModelInterface from '../types/ModelInterface'

const convertModelToQueryString = (model: Partial<ModelInterface>) => {
  const modelAsString = JSON.stringify(model)
  const modelAsQueryString = encodeURIComponent(modelAsString)

  return modelAsQueryString
}

export default convertModelToQueryString
