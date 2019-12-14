import React from 'react'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'
import updateExpandedInQueryStore from '../../stores/queryStore/updateExpandedInQueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import QueryStore from '../../stores/QueryStore'
import { useStore } from 'laco-react'
import FieldInput from '../FieldInput/FieldInput'
import updateDataInQueryStore from '../../stores/queryStore/updateDataInQueryStore'

type QueryDataProps = {
  disabled?: boolean
}

const QueryData = ({ disabled }: QueryDataProps) => {
  const { expanded, data }: QueryStoreInterface = useStore(QueryStore)
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
        title="Data Query URL"
        value={data.url}
        onChange={e => {
          updateDataInQueryStore({ url: e.currentTarget.value })
        }}
      />
    </PanelExpandableItem>
  )
}

export default QueryData
