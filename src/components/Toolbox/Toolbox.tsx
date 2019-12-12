import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'
import ExtensionIcon from '@material-ui/icons/Extension'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'
import React, { Dispatch, SetStateAction, useState } from 'react'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import getIconSize from '../../utils/getIconSize'
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

const getIconStyle = (
  view: ToolboxViewTypes,
  currentView: ToolboxViewTypes
) => ({
  ...getIconSize('normal'),
  color: view === currentView ? 'var(--color-blue)' : 'currentColor'
})

const Toolbox = (props: ToolboxProps) => {
  const [view, setView] = useState<ToolboxViewTypes>(props.view || 'list')

  return (
    <Panel>
      <PanelHeader
        title="Toolbox"
        icon={<MUIcon size="normal" render={p => <ExtensionIcon {...p} />} />}
        actions={
          <>
            <MUIcon
              size="medium"
              title="List View"
              interactive
              render={p => (
                <FormatListBulletedOutlinedIcon
                  onClick={() => {
                    handleSetListView(view, setView)
                  }}
                  style={getIconStyle('list', view)}
                  {...props}
                />
              )}
            />
            <MUIcon
              size="medium"
              interactive
              title="Grid View"
              render={p => (
                <AppsOutlinedIcon
                  onClick={() => {
                    handleSetGridView(view, setView)
                  }}
                  style={getIconStyle('grid', view)}
                  {...props}
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
