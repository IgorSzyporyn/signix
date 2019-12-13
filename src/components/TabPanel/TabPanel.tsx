import React, { useMemo } from 'react'
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
  active: number,
  onClick?: (active: number) => void
) =>
  tabs.map((tab, index) => {
    return (
      <PanelTab
        title={titles[index]}
        active={active === index}
        key={`tabpanel-tab-${index}-${uniqueId()}`}
        onClick={() => {
          onClick && onClick(index)
        }}
      >
        {tab}
      </PanelTab>
    )
  })

const createPanelItems = (panels: React.ReactNode[], active: number) =>
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
  titles: string[]
  tabs: React.ReactNode[]
  panels: React.ReactNode[]
  active: number
  tabsStyle?: React.CSSProperties
  onClick?: (active: number) => void
}

const TabPanel = ({
  titles,
  tabs,
  tabsStyle = {},
  panels,
  active,
  onClick
}: TabPanelProps) => {
  const tabItems = useMemo(
    () => createTabItems(titles, tabs, active, onClick),
    [titles, tabs, active, onClick]
  )

  const panelItems = useMemo(() => createPanelItems(panels, active), [
    panels,
    active
  ])

  return (
    <Wrapper>
      <PanelTabs style={tabsStyle}>{tabItems}</PanelTabs>
      <PanelItems>{panelItems}</PanelItems>
    </Wrapper>
  )
}

export default TabPanel
