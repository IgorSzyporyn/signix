import ApiQueryStoreInterface from './ApiQueryStoreInterface'
import ApiStoreInterface from './ApiStoreInterface'

type AppApiProps = {
  query: Pick<ApiStoreInterface, 'dataQuery' | 'modelQuery' | 'enabled'>
  data: ApiQueryStoreInterface
}

export default AppApiProps
