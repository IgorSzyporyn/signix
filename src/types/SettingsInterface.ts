import SettingsActionInterface from './SettingsActionInterface'
import SettingsCanvasInterface from './SettingsCanvasInterface'
import SettingsLayersInterface from './SettingsLayersInterface'
import SettingsMainInterface from './SettingsMainInterface'
import SettingsSettingsInterface from './SettingsSettingsInterface'
import SettingsToolboxInterface from './SettingsToolboxInterface'
import SettingsUtilityInterface from './SettingsUtilityInterface'

type SettingsInterface = {
  action: SettingsActionInterface
  canvas: SettingsCanvasInterface
  layers: SettingsLayersInterface
  main: SettingsMainInterface
  toolbox: SettingsToolboxInterface
  utility: SettingsUtilityInterface
  expanded: SettingsSettingsInterface
}

export default SettingsInterface
