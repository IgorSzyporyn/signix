import WarningIcon from '@material-ui/icons/Warning'
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import LayersApiFixing from '../LayersApiFixing/LayersApiFixing'
import Modal from '../Modal/Modal'
import MUIcon from '../MUIcon/MUIcon'
import getFontSize from '../../utils/getFontSize'

const Wrapper = styled.div`
  margin: var(--spacing-small) 0 var(--spacing);
  border-radius: 0.5rem;

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

type LayersApiFixButtonProps = {
  onFixingChange?: (fixing: boolean) => void
}

const LayersApiFixButton = ({ onFixingChange }: LayersApiFixButtonProps) => {
  const [fixing, setFixing] = useState(false)

  return (
    <Wrapper>
      <MUIcon
        size="large"
        rootStyle={{
          float: 'left',
          marginRight: 'var(--gutter-large)'
        }}
        style={{ color: 'var(--color-warning)' }}
        render={p => <WarningIcon {...p} />}
      />
      <Text>One or more of your layers has a problem with the API data or model.</Text>
      <Text>Try to auto fix by clicking button.</Text>
      <Button
        variant="primary"
        onClick={() => {
          setFixing(true)
        }}
      >
        AutoFix
      </Button>

      {fixing && (
        <Modal>
          <LayersApiFixing
            onFixed={fixed => {
              setFixing(false)
            }}
          />
        </Modal>
      )}
    </Wrapper>
  )
}

export default LayersApiFixButton
