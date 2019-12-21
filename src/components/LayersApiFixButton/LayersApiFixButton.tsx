import WarningIcon from '@material-ui/icons/Warning'
import { useStore } from 'laco-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import ApiLayerErrorStore from '../../stores/ApiLayerErrorStore'
import ApiLayerErrorStoreInterface from '../../types/ApiLayerErrorStoreInterface'
import getFontSize from '../../utils/getFontSize'
import Button from '../Button/Button'
import LayersApiFixing from '../LayersApiFixing/LayersApiFixing'
import Modal from '../Modal/Modal'
import MUIcon from '../MUIcon/MUIcon'
import ApiStoreInterface from '../../types/ApiStoreInterface'
import ApiStore from '../../stores/ApiStore'
import ApiQueryErrorStoreInterface from '../../types/ApiQueryErrorStoreInterface'
import ApiQueryErrorStore from '../../stores/ApiQueryErrorStore'
import ApiQueryStoreInterface from '../../types/ApiQueryStoreInterface'
import ApiQueryStore from '../../stores/ApiQueryStore'
import ModelStoreInterface from '../../types/ModelStoreInterface'
import checkForApiItemsInModelStore from '../../stores/model/checkForApiItemsInModelStore'

const Wrapper = styled.div`
  padding: 0 var(--spacing-medium);
  margin: var(--spacing-small) 0 var(--spacing);
  border-radius: 0.5rem;

  & > p:first-of-type {
    min-height: 3.2rem;
    display: flex;
    align-items: center;
  }
`

const MainContainer = styled.div``

const Text = styled.p`
  font-size: ${getFontSize('xsmall')};
  margin-bottom: var(--gutter);
`

type LayersApiFixButtonProps = {}

const LayersApiFixButton = (props: LayersApiFixButtonProps) => {
  const { enabled: apiEnabled }: ApiStoreInterface = useStore(ApiStore)
  const { tested: apiTested }: ApiQueryStoreInterface = useStore(ApiQueryStore)
  const { valid }: ApiLayerErrorStoreInterface = useStore(ApiLayerErrorStore)

  const [fixing, setFixing] = useState(false)

  const hasApiItems = checkForApiItemsInModelStore()

  return (
    <Wrapper hidden={(!apiEnabled && !hasApiItems) || !hasApiItems}>
      <MainContainer hidden={valid && apiTested}>
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
            {apiTested ? (
              <>
                <Text>One or more of your layers has a problem with the API data or model.</Text>
                <Text>Try to auto fix by clicking button.</Text>
              </>
            ) : (
              <>
                <Text>
                  API needs validation, all API functionality in layers has been disabled.
                </Text>
              </>
            )}
          </>
        ) : (
          <>
            <Text>API is disabled, all API layers has been disabled.</Text>
          </>
        )}

        {apiTested && apiEnabled && (
          <Button
            variant="primary"
            onClick={() => {
              setFixing(true)
            }}
          >
            AutoFix
          </Button>
        )}
      </MainContainer>

      {fixing && (
        <Modal>
          <LayersApiFixing
            onClose={() => {
              setFixing(false)
            }}
          />
        </Modal>
      )}
    </Wrapper>
  )
}

export default LayersApiFixButton
