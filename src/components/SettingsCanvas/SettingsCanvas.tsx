import React from 'react'
import SettingsPanel from '../SettingsPanel/SettingsPanel'
import FieldColor from '../FieldColor/FieldColor'
import { useStore } from 'laco-react'
import SettingsStore, {
  SettingsStoreInterface
} from '../../stores/SettingsStore'

type SettingsCanvasProps = {}

const SettingsCanvas = (props: SettingsCanvasProps) => {
  const { canvas }: SettingsStoreInterface = useStore(SettingsStore)
  return (
    <SettingsPanel title="Canvas" type="canvas">
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        title="Canvas background"
        color={canvas.background}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        title="Selected outline"
        color={canvas.active}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        title="Drop available outline"
        color={canvas.dropReady}
      />
      <FieldColor
        inline
        labelStyle={{ minWidth: '11rem' }}
        title="Drop active outline"
        color={canvas.dropOver}
      />
    </SettingsPanel>
  )
}

export default SettingsCanvas
