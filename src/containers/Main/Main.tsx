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
import Query from '../../components/Query/Query'
import Settings from '../../components/Settings/Settings'
import TabPanel from '../../components/TabPanel/TabPanel'
import Toolbox from '../../components/Toolbox/Toolbox'
import VerticalTabPanel from '../../components/VerticalTabPanel/VerticalTabPanel'
import AppTabStore from '../../stores/AppTabStore'
import updateActiveTabInAppTabStore from '../../stores/appTabStore/updateActiveTabInAppTabStore'
import AppTabStoreInterface from '../../types/AppTabStoreInterface'

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
  const {
    actionAreaActiveTab,
    mainAreaActiveTab,
    utilityAreaActiveTab
  }: AppTabStoreInterface = useStore(AppTabStore)

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
            activeTab={utilityAreaActiveTab}
            changeHandler={utilityAreaActiveTab => {
              updateActiveTabInAppTabStore({ utilityAreaActiveTab })
            }}
            titles={['Toolbox', 'Settings', 'Media Explorer']}
            tabs={[
              <MUIcon size="large" render={p => <ExtensionIcon {...p} />} />,
              <MUIcon size="large" render={p => <SettingsIcon {...p} />} />,
              <MUIcon size="large" render={p => <ExploreIcon {...p} />} />
            ]}
            panels={[<Toolbox />, <Settings />, <div />]}
          />
        </UtilityAreaContainer>
        <MainAreaContainer>
          <TabPanel
            activeTab={mainAreaActiveTab}
            changeHandler={mainAreaActiveTab => {
              updateActiveTabInAppTabStore({ mainAreaActiveTab })
            }}
            titles={['Canvas with the signature items', 'The form user uses']}
            tabs={['Canvas', 'Form']}
            panels={[<Canvas />, <Form />]}
          />
        </MainAreaContainer>
      </PaneContainerPrimary>
      <PaneContainerSecondary>
        <TabPanel
          activeTab={actionAreaActiveTab}
          changeHandler={actionAreaActiveTab => {
            updateActiveTabInAppTabStore({ actionAreaActiveTab })
          }}
          titles={[
            'Layers of canvas items',
            'Properties of selected item',
            'Connect to API Interfaces'
          ]}
          tabs={['Layers', 'Properties', 'API']}
          panels={[<Layers />, <Properties />, <Query />]}
        />
      </PaneContainerSecondary>
    </SplitPane>
  )
}

export default Main
