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
  background-color: var(--color-darkest);
`

const PanelTabs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`

type PanelTabProps = {
  active: boolean
}

const PanelTab = styled.div<PanelTabProps>`
  display: flex;
  font-size: ${getFontSize('xsmall')};
  align-items: center;
  justify-content: center;
  padding: var(--spacing-small);
  cursor: pointer;

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
  titles: string[],
  tabs: Array<React.ReactNode>,
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

const createPanelItems = (panels: Array<React.ReactNode>, active: number) =>
  panels.map((panel, index) => {
    return (
      <PanelItem hidden={active !== index} key={`tabpanel-panel-${index}-${uniqueId()}`}>
        {panel}
      </PanelItem>
    )
  })

const PanelItem = styled.div``

type VerticalTabPanelProps = {
  activeTab: number
  changeHandler: (activeTab: number) => void
  panels: React.ReactNode[]
  tabs: React.ReactNode[]
  tabsStyle?: React.CSSProperties
  titles: string[]
}

const VerticalTabPanel = ({
  activeTab,
  changeHandler,
  panels,
  tabs,
  tabsStyle = {},
  titles
}: VerticalTabPanelProps) => {
  const tabItems = useMemo(() => createTabItems(titles, tabs, activeTab, changeHandler), [
    titles,
    tabs,
    activeTab,
    changeHandler
  ])

  const panelItems = useMemo(() => createPanelItems(panels, activeTab), [panels, activeTab])

  return (
    <Wrapper>
      <PanelTabs style={tabsStyle}>{tabItems}</PanelTabs>
      <PanelItems>{panelItems}</PanelItems>
    </Wrapper>
  )
}

export default VerticalTabPanel
