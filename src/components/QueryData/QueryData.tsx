import { useStore } from 'laco-react'
import React from 'react'
import QueryStore from '../../stores/QueryStore'
import updateExpandedInQueryStore from '../../stores/queryStore/updateExpandedInQueryStore'
import updateQueryStore from '../../stores/queryStore/updateQueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'
import QueryDataStoreInterface from '../../types/QueryDataStoreInterface'
import QueryDataStore from '../../stores/QueryDataStore'

type QueryDataProps = {
  disabled?: boolean
}

const QueryData = ({ disabled }: QueryDataProps) => {
  const { expanded, data }: QueryStoreInterface = useStore(QueryStore)
  const { data: exampleData }: QueryDataStoreInterface = useStore(
    QueryDataStore
  )
  const { queryData: isExpanded } = expanded

  return (
    <PanelExpandableItem
      title="API Data Query"
      expanded={!disabled ? isExpanded : false}
      disabled={disabled}
      onExpandedChange={expanded => {
        updateExpandedInQueryStore({ queryData: expanded })
      }}
    >
      <FieldInput
        label="Data Query URL"
        value={data.url}
        onChange={e => {
          updateQueryStore({
            tested: false,
            data: { ...data, url: e.currentTarget.value }
          })
        }}
      />
      <FieldCheckbox
        inline
        label="Query Token Required"
        title="The query requires a token to fetch data"
        checked={data.dynamic}
        onChange={e => {
          updateQueryStore({
            tested: false,
            data: { ...data, dynamic: e.currentTarget.checked }
          })
        }}
      />
      <FieldInput
        label="Token Key"
        title="The name of the token key required to fetch data"
        hidden={!data.dynamic}
        value={data.dynamicKey}
        onChange={e => {
          updateQueryStore({
            tested: false,
            data: { ...data, dynamicKey: e.currentTarget.value }
          })
        }}
      />
      <FieldInput
        label="Test Token Key"
        title="A token key value for testing and validation purposes"
        hidden={!data.dynamic}
        value={data.dynamicTestKey}
        onChange={e => {
          updateQueryStore({
            tested: false,
            data: { ...data, dynamicTestKey: e.currentTarget.value }
          })
        }}
      />
      {exampleData && (
        <div>
          <pre>{JSON.stringify(exampleData, null, 2)}</pre>
        </div>
      )}
    </PanelExpandableItem>
  )
}

export default QueryData
