import React from 'react'
import VerticalTabPanel from './VerticalTabPanel'
import '../../baseline.css'

export default {
  component: VerticalTabPanel,
  title: 'Components|VerticalTabPanel'
}

export const Default = () => (
  <VerticalTabPanel
    active={0}
    titles={['first title', 'second title']}
    tabs={['first', 'second']}
    panels={[<div>First Panel</div>, <div>Second Panel</div>]}
  />
)
