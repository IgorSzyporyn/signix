import { useStore } from 'laco-react'
import React from 'react'
import ApiQueryStore from '../../stores/ApiQueryStore'
import updateTestedInApiQueryStore from '../../stores/apiQueryStore/updateTestedInApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import updateApiStore from '../../stores/apiStore/updateApiStore'
import updateExpandedInApiStore from '../../stores/apiStore/updateExpandedInApiStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import FieldInput from '../FieldInput/FieldInput'
import JsonViewer from '../JsonViewer/JsonViewer'
import PanelExpandableItem from '../PanelExpandableItem/PanelExpandableItem'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'

type ApiModelQueryProps = {
  disabled?: boolean
}

const ApiModelQuery = ({ disabled }: ApiModelQueryProps) => {
  const { model: exampleModel }: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const { expanded, modelQuery }: ApiStoreInterface = useStore(ApiStore)
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
      <FieldCheckbox
        inline
        label="Enable Model Query"
        checked={modelQuery.enabled}
        onChange={e => {
          updateTestedInApiQueryStore(false)
          updateApiStore({ modelQuery: { ...modelQuery, enabled: e.currentTarget.checked } })
        }}
      />
      {modelQuery.enabled && (
        <>
          <FieldInput
            label="Model Query URL"
            value={modelQuery.url}
            onChange={e => {
              updateTestedInApiQueryStore(false)
              updateApiStore({ modelQuery: { ...modelQuery, url: e.currentTarget.value } })
            }}
          />
          {exampleModel && <JsonViewer json={exampleModel} />}
        </>
      )}
    </PanelExpandableItem>
  )
}

export default ApiModelQuery
