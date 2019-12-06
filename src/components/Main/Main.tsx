import React from 'react'
import SplitPane from 'react-split-pane'
import styled from 'styled-components'
import SettingsStore, {
  SettingsStoreInterface
} from '../../stores/SettingsStore'
import { useStore } from 'laco-react'
import Toolbox from '../Toolbox/Toolbox'
import Canvas from '../Canvas/Canvas'
import Layers from '../Layers/Layers'
import ModelStore, { ModelStoreInterface } from '../../stores/ModelStore'

const PaneContainerPrimary = styled.div`
  min-height: 100%;
  display: flex;
`

const PaneContainerSecondary = styled.section`
  min-height: 100%;
  background-color: var(--color-darker);
`

const ToolboxContainer = styled.section`
  min-height: 100%;
  width: 24rem;
  background-color: var(--color-darker);
`

const CanvasContainer = styled.section`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-color: var(--color-dark);
`

const Main = () => {
  const settings: SettingsStoreInterface = useStore(SettingsStore)
  const { model, active }: ModelStoreInterface = useStore(ModelStore)

  return (
    <SplitPane
      split="vertical"
      maxSize={settings.layers.maxWidth}
      minSize={settings.layers.minWidth}
      defaultSize={settings.layers.width}
      primary="second"
    >
      <PaneContainerPrimary>
        <ToolboxContainer>
          <Toolbox view={settings.toolbox.view} />
        </ToolboxContainer>
        <CanvasContainer
          style={{
            backgroundColor: settings.canvas.backgroundColor
          }}
        >
          <Canvas model={model} active={active} />
        </CanvasContainer>
      </PaneContainerPrimary>
      <PaneContainerSecondary>
        <Layers model={model} />
      </PaneContainerSecondary>
    </SplitPane>
  )
}

export default Main
