import React, { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'
import Main from './containers/Main/Main'
import './resizer.scss'
import initModelStore from './stores/model/initModelStore'
import ModelInterfacePartial from './types/ModelInterfacePartial'
import Header from './containers/Header/Header'

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
          <Header />
        </HeaderContainer>
        <MainContainer>
          <Main />
        </MainContainer>
      </DndProvider>
    </Root>
  )
}

export default App
