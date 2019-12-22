import { useStore } from 'laco-react'
import { isEmpty } from 'lodash'
import React from 'react'
import styled from 'styled-components'
import ApiQueryStore from '../../stores/ApiQueryStore'
import updateApiQueryStore from '../../stores/apiQueryStore/updateApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import updateApiStore from '../../stores/apiStore/updateApiStore'
import updateExpandedInApiStore from '../../stores/apiStore/updateExpandedInApiStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import getFontSize from '../../utils/getFontSize'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import FieldInput from '../FieldInput/FieldInput'
import JsonViewer from '../JsonViewer/JsonViewer'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'

const InvalidText = styled.div`
  font-size: ${getFontSize('xsmall')};
  padding: var(--gutter) 0;
  text-align: center;
`

type ApiDataQueryProps = {
  disabled?: boolean
}

const ApiDataQuery = ({ disabled }: ApiDataQueryProps) => {
  const { expanded, dataQuery: data }: ApiStoreInterface = useStore(ApiStore)
  const queryStore: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const { queryData: isExpanded } = expanded

  const hasEmptyData = isEmpty(queryStore.data)

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
          updateApiQueryStore({ tested: false, dataTested: false, dataValid: false, data: {} })
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
          updateApiQueryStore({ tested: false, dataTested: false, dataValid: false, data: {} })
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
          updateApiStore({
            dataQuery: { ...data, dynamicKey: e.currentTarget.value }
          })
          updateApiQueryStore({ tested: false, dataTested: false, dataValid: false, data: {} })
        }}
      />
      <FieldInput
        label="Test Token Key"
        title="A token key value for testing and validation purposes"
        hidden={!data.dynamic}
        value={data.dynamicTestKey}
        onChange={e => {
          updateApiQueryStore({ tested: false, dataTested: false, dataValid: false, data: {} })
          updateApiStore({
            dataQuery: { ...data, dynamicTestKey: e.currentTarget.value }
          })
        }}
      />

      {queryStore.dataValid ? (
        <>{queryStore.dataTested && !hasEmptyData && <JsonViewer json={queryStore.data} />}</>
      ) : (
        <InvalidText>No valid model to show</InvalidText>
      )}
    </PanelExpandableItem>
  )
}

export default ApiDataQuery
