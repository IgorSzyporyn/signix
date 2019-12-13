import ExploreIcon from '@material-ui/icons/Explore'
import ExtensionIcon from '@material-ui/icons/Extension'
import SettingsIcon from '@material-ui/icons/Settings'
import { useStore } from 'laco-react'
import React from 'react'
import SplitPane from 'react-split-pane'
import styled from 'styled-components'
import Canvas from '../../components/Canvas/Canvas'
import Form from '../../components/Form/Form'
import Layers from '../../components/Layers/Layers'
import MUIcon from '../../components/MUIcon/MUIcon'
import Properties from '../../components/Properties/Properties'
import Settings from '../../components/Settings/Settings'
import TabPanel from '../../components/TabPanel/TabPanel'
import Toolbox from '../../components/Toolbox/Toolbox'
import VerticalTabPanel from '../../components/VerticalTabPanel/VerticalTabPanel'
import AppStore from '../../stores/AppStore'
import updateActionAreaInAppStore from '../../stores/appStore/updateActionAreaInAppStore'
import updateMainAreaInAppStore from '../../stores/appStore/updateMainAreaInAppStore'
import updateUtilityAreaInAppStore from '../../stores/appStore/updateUtilityAreaInAppStore'
import AppStoreInterface from '../../types/AppStoreInterface'

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
  const { actionArea, mainArea, utilityArea }: AppStoreInterface = useStore(
    AppStore
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
            active={utilityArea.activeTab}
            titles={['Toolbox', 'Settings', 'Media Explorer']}
            tabs={[
              <MUIcon size="large" render={p => <ExtensionIcon {...p} />} />,
              <MUIcon size="large" render={p => <SettingsIcon {...p} />} />,
              <MUIcon size="large" render={p => <ExploreIcon {...p} />} />
            ]}
            panels={[<Toolbox />, <Settings />, <div />]}
            onClick={activeTab => {
              updateUtilityAreaInAppStore({ activeTab })
            }}
          />
        </UtilityAreaContainer>
        <MainAreaContainer>
          <TabPanel
            active={mainArea.activeTab}
            titles={['Canvas with the signature items', 'The form user uses']}
            tabs={['Canvas', 'Form']}
            panels={[<Canvas />, <Form />]}
            onClick={activeTab => {
              updateMainAreaInAppStore({ activeTab })
            }}
          />
        </MainAreaContainer>
      </PaneContainerPrimary>
      <PaneContainerSecondary>
        <TabPanel
          active={actionArea.activeTab}
          titles={['Layers of canvas items', 'Properties of selected item']}
          tabs={['Layers', 'Properties']}
          panels={[<Layers />, <Properties />]}
          onClick={activeTab => {
            updateActionAreaInAppStore({ activeTab })
          }}
        />
      </PaneContainerSecondary>
    </SplitPane>
  )
}

export default Main
