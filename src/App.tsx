import React, { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'
import './animations.css'
import Modal from './components/Modal/Modal'
import QueryValidation from './components/QueryValidation/QueryValidation'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import './resizer.scss'
import initModelStore from './stores/model/initModelStore'
import { initApiQueryStore } from './stores/ApiQueryStore'
import { initApiStore } from './stores/ApiStore'
import AppApiProps from './types/AppApiProps'
import ModelInterfacePartial from './types/ModelInterfacePartial'
import updateApiStore from './stores/apiStore/updateApiStore'

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
  const shouldShowValidation = !!api
    ? (api => {
        const { query } = api

        return query.enabled
      })(api!)
    : false

  const [showValidation, setShowValidation] = useState(shouldShowValidation)

  useEffect(() => {
    if (model) {
      initModelStore(model, model.type)
    }
  }, [model])

  useEffect(() => {
    if (api) {
      initApiStore(api.query)
      initApiQueryStore(api.data)
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
          <QueryValidation
            onValidated={valid => {
              setShowValidation(false)
              updateApiStore({
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
