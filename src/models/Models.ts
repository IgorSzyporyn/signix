import TextModel from './TextModel'
import TextStaticModel from './TextStaticModel'
import ModelTypes from '../types/ModelTypes'
import ModelInterface from '../types/ModelInterface'
import CoreModel from './CoreModel'
import TextDynamicModel from './TextDynamicModel'
import ImageModel from './ImageOptionsModel'
import ImageStaticModel from './ImageStaticModel'
import ImageDynamicModel from './ImageDynamicModel'
import BackgroundModel from './BackgroundModel'
import GroupModel from './GroupModel'
import ImageOptionsModel from './ImageOptionsModel'
import TextOptionsModel from './TextOptionsModel'
import ImageOptionsMultipleModel from './ImageOptionsMultipleMode'

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
  textoptions: TextOptionsModel,
  image: ImageModel,
  imagestatic: ImageStaticModel,
  imagedynamic: ImageDynamicModel,
  imageoptions: ImageOptionsModel,
  imageoptionsmultiple: ImageOptionsMultipleModel
}

export default Models
