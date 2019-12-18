import React, { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'
import './animations.css'
import ApiQueryValidation from './components/ApiQueryValidation/ApiQueryValidation'
import Modal from './components/Modal/Modal'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import './resizer.scss'
import { initApiQueryStore } from './stores/ApiQueryStore'
import updateApiQueryStore from './stores/apiQueryStore/updateApiQueryStore'
import { initApiStore } from './stores/ApiStore'
import initModelStore from './stores/model/initModelStore'
import AppApiProps from './types/AppApiProps'
import ModelInterfacePartial from './types/ModelInterfacePartial'

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-pitch);
  color: var(--color-lighter);
`

const HeaderContainer = styled.header`
  padding: 1rem var(--gutter);
  display: none;
`

const MainContainer = styled.main`
  flex-grow: 1;
  position: relative;
`

type AppProps = {
  model?: ModelInterfacePartial
  api?: AppApiProps
}

const App = ({ model, api }: AppProps) => {
  const [showValidation, setShowValidation] = useState(false)

  useEffect(() => {
    if (model) {
      initModelStore(model, model.type)
    }
  }, [model])

  useEffect(() => {
    if (api) {
      initApiStore(api.query)
      initApiQueryStore(api.data)
      setShowValidation(true)
    }
  }, [api])

  return (
    <Root>
      <DndProvider backend={HTML5Backend}>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContainer>
          <Main />
        </MainContainer>
      </DndProvider>
      {showValidation && (
        <Modal>
          <ApiQueryValidation
            onValidated={valid => {
              setShowValidation(false)
              updateApiQueryStore({
                valid,
                validating: false,
                tested: true
              })
            }}
          />
        </Modal>
      )}
    </Root>
  )
}

export default App
