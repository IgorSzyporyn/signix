import ModelInterface from '../types/ModelInterface'
import ApiStoreInterface from '../types/ApiStoreInterface'
import ApiStore from '../stores/ApiStore'

const createModelFromTemplate = (source: ModelInterface) => {
  const { enabled }: ApiStoreInterface = ApiStore.get()
  const template: ModelInterface = { ...source }

  if (template.api && !enabled) {
    template.disabled = true
  }

  return template
}

export default createModelFromTemplate
