import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'
import React, { Dispatch, SetStateAction, useState } from 'react'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'
import ToolboxItems from '../ToolboxItems/ToolboxItems'

const handleSetGridView = (
  view: ToolboxViewTypes,
  setView: Dispatch<SetStateAction<ToolboxViewTypes>>
) => {
  if (view !== 'grid') {
    setView('grid')
    // @TODO - Update SettingsStore
  }
}

const handleSetListView = (
  view: ToolboxViewTypes,
  setView: Dispatch<SetStateAction<ToolboxViewTypes>>
) => {
  if (view !== 'list') {
    setView('list')
    // @TODO - Update SettingsStore
  }
}

type ToolboxProps = {
  view?: ToolboxViewTypes
}

const getViewTypeIconStyle = (view: ToolboxViewTypes, currentView: ToolboxViewTypes) => ({
  color: view === currentView ? 'var(--color-blue)' : 'currentColor'
})

const Toolbox = (props: ToolboxProps) => {
  const [view, setView] = useState<ToolboxViewTypes>(props.view || 'list')

  return (
    <Panel>
      <PanelHeader
        title="Toolbox"
        actions={
          <>
            <MUIcon
              interactive
              title="List View"
              size="medium"
              render={p => (
                <FormatListBulletedOutlinedIcon
                  onClick={() => {
                    handleSetListView(view, setView)
                  }}
                  {...{
                    ...p,
                    style: {
                      ...(p.style || {}),
                      ...getViewTypeIconStyle('list', view)
                    }
                  }}
                />
              )}
            />
            <MUIcon
              interactive
              title="Grid View"
              size="medium"
              render={p => (
                <AppsOutlinedIcon
                  onClick={() => {
                    handleSetGridView(view, setView)
                  }}
                  {...{
                    ...p,
                    style: {
                      ...(p.style || {}),
                      ...getViewTypeIconStyle('grid', view)
                    }
                  }}
                />
              )}
            />
          </>
        }
      />
      <PanelBody>
        <ToolboxItems view={view as ToolboxViewTypes} />
      </PanelBody>
    </Panel>
  )
}

export default Toolbox
