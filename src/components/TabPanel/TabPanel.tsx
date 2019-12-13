import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import getFontSize from '../../utils/getFontSize'
import { uniqueId } from '../../utils/utilities'

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
  padding: calc(var(--spacing) + 0.5rem) var(--spacing-large);
  font-size: ${getFontSize('xsmall')};
  cursor: pointer;

  ${({ active }) => {
    let style = ``

    if (active) {
      style = `
        background-color: var(--color-darker);
        color: var(--color-lightest);
        font-weight: 700;
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
  titles: string[],
  tabs: React.ReactNode[],
  activeTab: number,
  onClick?: (activeTab: number) => void
) =>
  tabs.map((tab, index) => {
    return (
      <PanelTab
        title={titles[index]}
        active={activeTab === index}
        key={`tabpanel-tab-${index}-${uniqueId()}`}
        onClick={() => {
          onClick && onClick(index)
        }}
      >
        {tab}
      </PanelTab>
    )
  })

const createPanelItems = (panels: React.ReactNode[], activeTab: number) =>
  panels.map((panel, index) => {
    return (
      <PanelItem
        hidden={activeTab !== index}
        key={`tabpanel-panel-${index}-${uniqueId()}`}
      >
        {panel}
      </PanelItem>
    )
  })

const PanelItem = styled.div``

type TabPanelProps = {
  activeTab: number
  changeHandler: (activeTab: number) => void
  panels: React.ReactNode[]
  tabs: React.ReactNode[]
  tabsStyle?: React.CSSProperties
  titles: string[]
}

const TabPanel = ({
  activeTab,
  changeHandler,
  panels,
  tabs,
  tabsStyle = {},
  titles
}: TabPanelProps) => {
  const tabItems = useMemo(
    () => createTabItems(titles, tabs, activeTab, changeHandler),
    [titles, tabs, activeTab, changeHandler]
  )

  const panelItems = useMemo(() => createPanelItems(panels, activeTab), [
    panels,
    activeTab
  ])

  return (
    <Wrapper>
      <PanelTabs style={tabsStyle}>{tabItems}</PanelTabs>
      <PanelItems>{panelItems}</PanelItems>
    </Wrapper>
  )
}

export default TabPanel
