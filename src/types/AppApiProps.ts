import ApiQueryStoreInterface from './ApiQueryStoreInterface'
import ApiStoreInterface from './ApiStoreInterface'

type AppApiProps = {
  query: Pick<ApiStoreInterface, 'data' | 'model' | 'enabled'>
  data: ApiQueryStoreInterface
}

export default AppApiProps
