import React from 'react'
import SettingsPanel from '../SettingsPanel/SettingsPanel'
import FieldColor from '../FieldColor/FieldColor'
import { useStore } from 'laco-react'
import AppStore from '../../stores/AppStore'
import AppStoreInterface from '../../types/AppStoreInterface'

type SettingsCanvasProps = {}

const SettingsCanvas = (props: SettingsCanvasProps) => {
  const { canvas }: AppStoreInterface = useStore(AppStore)

  return (
    <SettingsPanel title="Canvas" type="utility-settings-canvas">
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        label="Canvas background"
        color={canvas.background}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        label="Selected outline"
        color={canvas.active}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        label="Drop available outline"
        color={canvas.dropReady}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        label="Drop active outline"
        color={canvas.dropOver}
      />
    </SettingsPanel>
  )
}

export default SettingsCanvas
