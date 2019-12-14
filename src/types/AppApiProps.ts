import QueryDataStoreInterface from './QueryDataStoreInterface'
import QueryStoreInterface from './QueryStoreInterface'

type AppApiProps = {
  query: Pick<QueryStoreInterface, 'data' | 'model' | 'enabled'>
  data: QueryDataStoreInterface
}

export default AppApiProps
