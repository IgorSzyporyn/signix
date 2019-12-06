import React, { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'
import Main from './components/Main/Main'
import Toolbar from './components/Toolbar/Toolbar'
import './resizer.css'
import initModelStore from './stores/model/initModelStore'
import ModelInterfacePartial from './types/ModelInterfacePartial'

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--darkgray);
`

const HeaderContainer = styled.header`
  padding: 1rem var(--gutter);
  background-color: var(--gray);
  border-bottom: 1px solid var(--darkgray);
  display: none;
`

const MainContainer = styled.main`
  flex-grow: 1;
  position: relative;
`

type AppProps = {
  model?: ModelInterfacePartial
}

const App = ({ model }: AppProps) => {
  useEffect(() => {
    if (model) {
      initModelStore(model, model.type)
    }
  }, [model])

  return (
    <Root>
      <DndProvider backend={HTML5Backend}>
        <HeaderContainer>
          <Toolbar />
        </HeaderContainer>
        <MainContainer>
          <Main />
        </MainContainer>
      </DndProvider>
    </Root>
  )
}

export default App
