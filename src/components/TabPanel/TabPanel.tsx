import React, { useState, Dispatch, useMemo } from 'react'
import styled from 'styled-components'
import { uniqueId } from '../../utils/utilities'
import getFontSize from '../../utils/getFontSize'

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`

const PanelTabs = styled.div`
  display: flex;
`

type PanelTabProps = {
  active: boolean
}

const PanelTab = styled.div<PanelTabProps>`
  display: flex;
  align-items: center;
  padding: var(--spacing) var(--double-spacing);
  font-size: ${getFontSize('xsmall')};

  ${({ active }) => {
    let style = ``

    if (active) {
      style = `
        background-color: var(--color-darker);
        color: var(--color-lightest);
        font-weight: 500;
      `
    }

    return style
  }}
`

const PanelItems = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-darker);

  & > * {
    flex-grow: 1;
  }
`

const createTabItems = (
  tabs: string[],
  active: number,
  setActive: Dispatch<number>
) =>
  tabs.map((tab, index) => {
    return (
      <PanelTab
        active={active === index}
        key={`tabpanel-tab-${index}-${uniqueId()}`}
        onClick={() => {
          setActive(index)
        }}
      >
        {tab}
      </PanelTab>
    )
  })

const createPanelItems = (panels: Array<React.ReactNode>, active: number) =>
  panels.map((panel, index) => {
    return (
      <PanelItem
        hidden={active !== index}
        key={`tabpanel-panel-${index}-${uniqueId()}`}
      >
        {panel}
      </PanelItem>
    )
  })

const PanelItem = styled.div``

type TabPanelProps = {
  tabs: string[]
  panels: Array<React.ReactNode>
}

const TabPanel = ({ tabs, panels }: TabPanelProps) => {
  const [active, setActive] = useState(0)

  const tabItems = useMemo(() => createTabItems(tabs, active, setActive), [
    tabs,
    active,
    setActive
  ])

  const panelItems = useMemo(() => createPanelItems(panels, active), [
    panels,
    active
  ])

  return (
    <Wrapper>
      <PanelTabs>{tabItems}</PanelTabs>
      <PanelItems>{panelItems}</PanelItems>
    </Wrapper>
  )
}

export default TabPanel
