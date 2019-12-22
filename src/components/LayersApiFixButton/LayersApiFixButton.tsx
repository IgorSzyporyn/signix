import WarningIcon from '@material-ui/icons/Warning'
import { useStore } from 'laco-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import ApiQueryStore from '../../stores/ApiQueryStore'
import ApiStore from '../../stores/ApiStore'
import checkForApiItemsInModelStore from '../../stores/model/checkForApiItemsInModelStore'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import getFontSize from '../../utils/getFontSize'
import Button from '../Button/Button'
import LayersApiFixing from '../LayersApiFixing/LayersApiFixing'
import Modal from '../Modal/Modal'
import MUIcon from '../MUIcon/MUIcon'

const Inner = styled.div`
  padding: 0 var(--spacing-medium);
  margin: var(--spacing-small) 0 var(--spacing);

  & > p:first-of-type {
    min-height: 3.2rem;
    display: flex;
    align-items: center;
  }
`

const Text = styled.p`
  font-size: ${getFontSize('xsmall')};
  margin-bottom: var(--gutter);
`

const LayersApiFixButton = () => {
  const { enabled: apiEnabled }: ApiStoreInterface = useStore(ApiStore)
  const { tested: apiTested, valid: apiValid }: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const { valid: apiLayersValid }: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)

  const [fixing, setFixing] = useState(false)

  const hideInner = apiEnabled ? apiLayersValid && apiTested && apiValid : false
  const hasApiItems = checkForApiItemsInModelStore()
  const hasApiErrors = !apiEnabled || !apiTested || !apiValid

  return (
    <div hidden={!hasApiItems}>
      <Inner hidden={hideInner}>
        <MUIcon
          size="large"
          rootStyle={{
            float: 'left',
            marginRight: 'var(--gutter-large)'
          }}
          style={{ color: 'var(--color-warning)' }}
          render={p => <WarningIcon {...p} />}
        />
        {apiEnabled ? (
          <>
            {apiTested && apiValid ? (
              <>
                <Text>One or more of your layers has a problem with the API data or model</Text>
                <Text>Try to auto fix by clicking button.</Text>
              </>
            ) : (
              <Text>API needs validation, all API functionality in layers has been disabled</Text>
            )}
          </>
        ) : (
          <Text>API is disabled, all API layers has been disabled.</Text>
        )}

        {!hasApiErrors && (
          <Button
            variant="primary"
            onClick={() => {
              setFixing(true)
            }}
          >
            Auto Fix
          </Button>
        )}
      </Inner>
      {fixing && (
        <Modal>
          <LayersApiFixing
            onClose={() => {
              setFixing(false)
            }}
          />
        </Modal>
      )}
    </div>
  )
}

export default LayersApiFixButton
