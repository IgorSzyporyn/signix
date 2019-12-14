import { useStore } from 'laco-react'
import React from 'react'
import QueryStore from '../../stores/QueryStore'
import updateExpandedInQueryStore from '../../stores/queryStore/updateExpandedInQueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'

type QueryModelProps = {
  disabled?: boolean
}

const QueryModel = ({ disabled }: QueryModelProps) => {
  const { expanded }: QueryStoreInterface = useStore(QueryStore)
  const { queryModel: isExpanded } = expanded

  return (
    <PanelExpandableItem
      title="API Model Query"
      disabled={disabled}
      expanded={!disabled ? isExpanded : false}
      onExpandedChange={expanded => {
        updateExpandedInQueryStore({ queryModel: expanded })
      }}
    ></PanelExpandableItem>
  )
}

export default QueryModel
