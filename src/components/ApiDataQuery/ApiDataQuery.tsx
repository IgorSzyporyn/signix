import { useStore } from 'laco-react'
import React from 'react'
import ApiQueryStore from '../../stores/ApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import updateExpandedInApiStore from '../../stores/apiStore/updateExpandedInApiStore'
import updateApiQueryStore from '../../stores/apiQueryStore/updateApiQueryStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import JsonViewer from '../JsonViewer/JsonViewer'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'
import updateApiStore from '../../stores/apiStore/updateApiStore'
import updateTestedInApiQueryStore from '../../stores/apiQueryStore/updateTestedInApiQueryStore'

type ApiDataQueryProps = {
  disabled?: boolean
}

const ApiDataQuery = ({ disabled }: ApiDataQueryProps) => {
  const { expanded, dataQuery: data }: ApiStoreInterface = useStore(ApiStore)
  const { data: exampleData }: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const { queryData: isExpanded } = expanded

  return (
    <PanelExpandableItem
      title="API Data Query"
      expanded={!disabled ? isExpanded : false}
      disabled={disabled}
      onExpandedChange={expanded => {
        updateExpandedInApiStore({ queryData: expanded })
      }}
    >
      <FieldInput
        label="Data Query URL"
        value={data.url}
        onChange={e => {
          updateTestedInApiQueryStore(false)
          updateApiStore({
            dataQuery: { ...data, url: e.currentTarget.value }
          })
        }}
      />
      <FieldCheckbox
        inline
        label="Query Token Required"
        title="The query requires a token to fetch data"
        checked={data.dynamic}
        onChange={e => {
          updateTestedInApiQueryStore(false)
          updateApiStore({
            dataQuery: { ...data, dynamic: e.currentTarget.checked }
          })
        }}
      />
      <FieldInput
        label="Token Key"
        title="The name of the token key required to fetch data"
        hidden={!data.dynamic}
        value={data.dynamicKey}
        onChange={e => {
          updateTestedInApiQueryStore(false)
          updateApiStore({
            dataQuery: { ...data, dynamicKey: e.currentTarget.value }
          })
        }}
      />
      <FieldInput
        label="Test Token Key"
        title="A token key value for testing and validation purposes"
        hidden={!data.dynamic}
        value={data.dynamicTestKey}
        onChange={e => {
          updateTestedInApiQueryStore(false)
          updateApiStore({
            dataQuery: { ...data, dynamicTestKey: e.currentTarget.value }
          })
        }}
      />
      {exampleData && <JsonViewer json={exampleData} />}
    </PanelExpandableItem>
  )
}

export default ApiDataQuery
