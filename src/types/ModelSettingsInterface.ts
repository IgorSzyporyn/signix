import ModelSettingsColorInterface from './ModelSettingsColorInterface'
import ModelSettingsDimensionInterface from './ModelSettingsDimensionInterface'
import ModelSettingsPositionInterface from './ModelSettingsPositionInterface'

type ModelSettingsInterface = {
  color?: ModelSettingsColorInterface
  dimension?: ModelSettingsDimensionInterface
  position?: ModelSettingsPositionInterface
}

export default ModelSettingsInterface
