import ApiErrorInterface from './ApiErrorInterface'

type GroupedLayerErrorsInterface = {
  [key: string]: ApiErrorInterface[]
}

export default GroupedLayerErrorsInterface