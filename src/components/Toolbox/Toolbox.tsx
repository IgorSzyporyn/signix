import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'
import React, { Dispatch, SetStateAction, useState } from 'react'
import ViewTypes from '../../types/ViewTypes'
import MUIcon from '../MUIcon/MUIcon'
import Panel from '../Panel/Panel'
import PanelBody from '../PanelBody/PanelBody'
import PanelHeader from '../PanelHeader/PanelHeader'
import ToolboxItems from '../ToolboxItems/ToolboxItems'

const handleSetGridView = (view: ViewTypes, setView: Dispatch<SetStateAction<ViewTypes>>) => {
  if (view !== 'grid') {
    setView('grid')
    // @TODO - Update SettingsStore
  }
}

const handleSetListView = (view: ViewTypes, setView: Dispatch<SetStateAction<ViewTypes>>) => {
  if (view !== 'list') {
    setView('list')
    // @TODO - Update SettingsStore
  }
}

type ToolboxProps = {
  view?: ViewTypes
}

const getViewTypeIconStyle = (view: ViewTypes, currentView: ViewTypes) => ({
  color: view === currentView ? 'var(--color-blue)' : 'currentColor'
})

const Toolbox = (props: ToolboxProps) => {
  const [view, setView] = useState<ViewTypes>(props.view || 'list')

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
        <ToolboxItems view={view as ViewTypes} />
      </PanelBody>
    </Panel>
  )
}

export default Toolbox
