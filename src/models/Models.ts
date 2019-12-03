import TextModel from './TextModel'
import TextStaticModel from './TextStaticModel'
import ModelTypes from '../types/ModelTypes'
import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'
import TextDynamicModel from './TextDynamicModel'
import ImageModel from './ImageModel'
import ImageStaticModel from './ImageStaticModel'
import ImageDynamicModel from './ImageDynamicModel'
import BackgroundModel from './BackgroundModel'
import GroupModel from './GroupModel'

type ModelsInterface = {
  [name in ModelTypes]: ModelInterface
}

const Models: ModelsInterface = {
  core: CoreModel,
  group: GroupModel,
  background: BackgroundModel,
  text: TextModel,
  textstatic: TextStaticModel,
  textdynamic: TextDynamicModel,
  image: ImageModel,
  imagestatic: ImageStaticModel,
  imagedynamic: ImageDynamicModel
}

export default Models
