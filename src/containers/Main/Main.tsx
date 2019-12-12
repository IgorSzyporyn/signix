import ExtensionIcon from '@material-ui/icons/Extension'
import SettingsIcon from '@material-ui/icons/Settings'
import { useStore } from 'laco-react'
import React from 'react'
import SplitPane from 'react-split-pane'
import styled from 'styled-components'
import Canvas from '../../components/Canvas/Canvas'
import Layers from '../../components/Layers/Layers'
import MUIcon from '../../components/MUIcon/MUIcon'
import Properties from '../../components/Properties/Properties'
import Settings from '../../components/Settings/Settings'
import TabPanel from '../../components/TabPanel/TabPanel'
import Toolbox from '../../components/Toolbox/Toolbox'
import VerticalTabPanel from '../../components/VerticalTabPanel/VerticalTabPanel'
import updateActionInSettingsStore from '../../stores/settings/updateActionInSettingsStore'
import updateMainInSettingsStore from '../../stores/settings/updateMainInSetttngsStore'
import updateUtilityInSettingsStore from '../../stores/settings/updateUtilityInSetttngsStore'
import ExploreIcon from '@material-ui/icons/Explore'
import SettingsStore, {
  SettingsStoreInterface
} from '../../stores/SettingsStore'
import Form from '../../components/Form/Form'

const PaneContainerPrimary = styled.div`
  min-height: 100%;
  display: flex;
`

const PaneContainerSecondary = styled.div`
  min-height: 100%;
`

const MainAreaContainer = styled.div`
  min-height: 100%;
  flex-grow: 1;
  position: relative;
`
const UtilityAreaContainer = styled.div`
  min-height: 100%;
  position: relative;
  width: 30rem;
  border-right: 0.1rem solid var(--color-pitch);
  display: flex;
  flex-direction: column;
`

const Main = () => {
  const { action, main, utility }: SettingsStoreInterface = useStore(
    SettingsStore
  )

  return (
    <SplitPane
      split="vertical"
      primary="second"
      maxSize={600}
      minSize={350}
      defaultSize={350}
    >
      <PaneContainerPrimary>
        <UtilityAreaContainer>
          <VerticalTabPanel
            active={utility.active}
            titles={['Toolbox', 'Settings', 'Media Explorer']}
            tabs={[
              <MUIcon size="large" render={p => <ExtensionIcon {...p} />} />,
              <MUIcon size="large" render={p => <SettingsIcon {...p} />} />,
              <MUIcon size="large" render={p => <ExploreIcon {...p} />} />
            ]}
            panels={[<Toolbox />, <Settings />, <div />]}
            onClick={active => {
              updateUtilityInSettingsStore({ active })
            }}
          />
        </UtilityAreaContainer>
        <MainAreaContainer>
          <TabPanel
            active={main.active}
            titles={['Canvas with the signature items', 'The forum user uses']}
            tabs={['Canvas', 'Form']}
            panels={[<Canvas />, <Form />]}
            onClick={active => {
              updateMainInSettingsStore({ active })
            }}
          />
        </MainAreaContainer>
      </PaneContainerPrimary>
      <PaneContainerSecondary>
        <TabPanel
          active={action.active}
          titles={['Layers of canvas items', 'Properties of selected item']}
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
