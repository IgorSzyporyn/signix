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

type ApiModelQueryProps = {
  disabled?: boolean
}

const InvalidText = styled.div`
  font-size: ${getFontSize('xsmall')};
  padding: var(--gutter) 0;
  text-align: center;
`

const ApiModelQuery = ({ disabled }: ApiModelQueryProps) => {
  const queryStore: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const { expanded, modelQuery }: ApiStoreInterface = useStore(ApiStore)
  const { queryModel: isExpanded } = expanded

  const hasEmptyModel = isEmpty(queryStore.model)

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
          updateApiQueryStore({ tested: false, modelTested: false, modelValid: false, model: {} })
          updateApiStore({ modelQuery: { ...modelQuery, enabled: e.currentTarget.checked } })
        }}
      />
      {modelQuery.enabled && (
        <>
          <FieldInput
            label="Model Query URL"
            value={modelQuery.url}
            onChange={e => {
              updateApiQueryStore({
                tested: false,
                modelTested: false,
                modelValid: false,
                model: {}
              })
              updateApiStore({ modelQuery: { ...modelQuery, url: e.currentTarget.value } })
            }}
          />
          {queryStore.modelValid ? (
            <>
              {queryStore.modelTested && !hasEmptyModel && <JsonViewer json={queryStore.model} />}
            </>
          ) : (
            <InvalidText>No valid model to show</InvalidText>
          )}
        </>
      )}
    </PanelExpandableItem>
  )
}

export default ApiModelQuery
