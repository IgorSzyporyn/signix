import React from 'react'
import Panel from '../Panel/Panel'
import PanelHeader from '../PanelHeader/PanelHeader'
import PanelBody from '../PanelBody/PanelBody'
import SettingsCanvas from '../SettingsCanvas/SettingsCanvas'
import styled from 'styled-components'

const PanelBodyInner = styled.div`
  margin-top: var(--half-gutter);
`

type SettingsProps = {}

const Settings = (props: SettingsProps) => {
  return (
    <Panel>
      <PanelHeader title="Settings" />
      <PanelBody>
        <PanelBodyInner>
          <SettingsCanvas />
        </PanelBodyInner>
      </PanelBody>
    </Panel>
  )
}

export default Settings
