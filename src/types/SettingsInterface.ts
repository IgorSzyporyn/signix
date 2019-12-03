import SettingsToolboxInterface from './SettingsToolboxInterface'
import SettingsCanvasInterface from './SettingsCanvasInterface'
import SettingsLayersInterface from './SettingsLayersInterface'

type SettingsInterface = {
  toolbox: SettingsToolboxInterface
  canvas: SettingsCanvasInterface
  layers: SettingsLayersInterface
}

export default SettingsInterface
