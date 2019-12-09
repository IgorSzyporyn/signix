import React from 'react'
import SplitPane from 'react-split-pane'
import styled from 'styled-components'
import Canvas from '../../components/Canvas/Canvas'
import Layers from '../../components/Layers/Layers'
import Properties from '../../components/Properties/Properties'
import TabPanel from '../../components/TabPanel/TabPanel'
import Toolbox from '../../components/Toolbox/Toolbox'
import { useStore } from 'laco-react'
import SettingsStore, {
  SettingsStoreInterface
} from '../../stores/SettingsStore'
import updateActionInSettingsStore from '../../stores/settings/updateActionInSettingsStore'

const PaneContainerPrimary = styled.div`
  min-height: 100%;
  display: flex;
`

const PaneContainerSecondary = styled.div`
  min-height: 100%;
`

const ToolboxContainer = styled.div`
  min-height: 100%;
  width: 24rem;
`

const CanvasContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const Main = () => {
  const { action }: SettingsStoreInterface = useStore(SettingsStore)
  const { active } = action

  return (
    <SplitPane
      split="vertical"
      primary="second"
      maxSize={600}
      minSize={350}
      defaultSize={350}
    >
      <PaneContainerPrimary>
        <ToolboxContainer>
          <Toolbox view={'list'} />
        </ToolboxContainer>
        <CanvasContainer>
          <Canvas />
        </CanvasContainer>
      </PaneContainerPrimary>
      <PaneContainerSecondary>
        <TabPanel
          active={active}
          tabs={['Layers', 'Properties']}
          panels={[<Layers />, <Properties />]}
          onClick={active => {
            updateActionInSettingsStore({ active })
          }}
        />
      </PaneContainerSecondary>
    </SplitPane>
  )
}

export default Main
