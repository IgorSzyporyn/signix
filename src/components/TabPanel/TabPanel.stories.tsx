import React from 'react'
import TabPanel from './TabPanel'
import '../../baseline.css'

export default {
  component: TabPanel,
  title: 'Components|TabPanel'
}

export const Default = () => (
  <TabPanel
    active={0}
    titles={['first title', 'second title']}
    tabs={['first', 'second']}
    panels={[<div>First Panel</div>, <div>Second Panel</div>]}
  />
)
