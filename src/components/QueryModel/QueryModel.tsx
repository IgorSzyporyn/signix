import { useStore } from 'laco-react'
import React from 'react'
import QueryStore from '../../stores/QueryStore'
import updateExpandedInQueryStore from '../../stores/queryStore/updateExpandedInQueryStore'
import updateQueryStore from '../../stores/queryStore/updateQueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import FieldInput from '../FieldInput/FieldInput'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'

type QueryModelProps = {
  disabled?: boolean
}

const QueryModel = ({ disabled }: QueryModelProps) => {
  const { expanded, model }: QueryStoreInterface = useStore(QueryStore)
  const { queryModel: isExpanded } = expanded

  return (
    <PanelExpandableItem
      title="API Model Query"
      disabled={disabled}
      expanded={!disabled ? isExpanded : false}
      onExpandedChange={expanded => {
        updateExpandedInQueryStore({ queryModel: expanded })
      }}
    >
      <FieldInput
        label="Model Query URL"
        value={model.url}
        onChange={e => {
          updateQueryStore({
            tested: false,
            model: { ...model, url: e.currentTarget.value }
          })
        }}
      />
    </PanelExpandableItem>
  )
}

export default QueryModel
