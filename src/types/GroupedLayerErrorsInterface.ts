import { ValidateLayerModelResultItem } from '../utils/validateLayerModelIntegrity'

type GroupedLayerErrorsInterface = {
  [key: string]: ValidateLayerModelResultItem[]
}

export default GroupedLayerErrorsInterface
