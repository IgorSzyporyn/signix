import { useStore } from 'laco-react'
import React from 'react'
import ApiQueryStore from '../../stores/ApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import updateExpandedInApiStore from '../../stores/apiStore/updateExpandedInApiStore'
import updateApiStore from '../../stores/apiStore/updateApiStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import FieldInput from '../FieldInput/FieldInput'
import JsonViewer from '../JsonViewer/JsonViewer'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'

type ApiModelQueryProps = {
  disabled?: boolean
}

const ApiModelQuery = ({ disabled }: ApiModelQueryProps) => {
  const { model: exampleModel }: ApiQueryStoreInterface = useStore(
    ApiQueryStore
  )
  const { expanded, model }: ApiStoreInterface = useStore(ApiStore)
  const { queryModel: isExpanded } = expanded

  return (
    <PanelExpandableItem
      title="API Model Query"
      disabled={disabled}
      expanded={!disabled ? isExpanded : false}
      onExpandedChange={expanded => {
        updateExpandedInApiStore({ queryModel: expanded })
      }}
    >
      <FieldInput
        label="Model Query URL"
        value={model.url}
        onChange={e => {
          updateApiStore({
            tested: false,
            model: { ...model, url: e.currentTarget.value }
          })
        }}
      />
      {exampleModel && <JsonViewer json={exampleModel} />}
    </PanelExpandableItem>
  )
}

export default ApiModelQuery
