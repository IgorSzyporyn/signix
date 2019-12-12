import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateExpandedInSettingsStore from '../../stores/settings/updateExpandedInSettingsStore'
import SettingsStore from '../../stores/SettingsStore'
import MUIcon from '../MUIcon/MUIcon'

const Wrapper = styled.div`
  border-bottom: 0.1rem solid var(--color-light);
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing) 0;
`

const Title = styled.h4`
  margin: 0 0 0 var(--half-gutter);
`

const Body = styled.div`
  position: relative;
  padding: 0 calc(var(--spacing) + var(--gutter)) var(--gutter);
`

type SettingsPanelProps = {
  title: string
  type: string
  children?: React.ReactNode
}

const SettingsPanel = ({ type, title, children }: SettingsPanelProps) => {
  const settingsStore = useStore(SettingsStore)
  let { [type]: isExpanded } = settingsStore.expanded

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          updateExpandedInSettingsStore(!isExpanded, type!)
        }}
      >
        <MUIcon
          size="medium"
          style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          render={p => <ChevronRightOutlinedIcon {...p} />}
        />
        <Title>{title}</Title>
      </Heading>
      <Body hidden={!isExpanded}>{children}</Body>
    </Wrapper>
  )
}

export default SettingsPanel