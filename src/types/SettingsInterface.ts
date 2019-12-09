import SettingsActionInterface from './SettingsActionInterface'
import SettingsCanvasInterface from './SettingsCanvasInterface'
import SettingsLayersInterface from './SettingsLayersInterface'
import SettingsToolboxInterface from './SettingsToolboxInterface'

type SettingsInterface = {
  action: SettingsActionInterface
  canvas: SettingsCanvasInterface
  layers: SettingsLayersInterface
  toolbox: SettingsToolboxInterface
}

export default SettingsInterface
